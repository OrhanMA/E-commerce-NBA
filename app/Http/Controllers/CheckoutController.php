<?php

// CheckoutController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\PaiementMethod;
use App\Models\DeliveryMethod;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Mail\OrderPlaced;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        // Render the checkout page
        return Inertia::render('Checkout');
    }

    public function placeOrder(Request $request)
    {
        // Retrieve cart data from the request
        $cartData = $request->input('products', []);

        // Calculate total price
        $totalPrice = collect($cartData)->sum(function ($product) {
            return $product['quantity'] * $product['price'];
        });

        // Get paiement method ID from the database based on the selected name
        $paiementMethod = PaiementMethod::where('name', $request->input('paiementMethod'))->first();
        $paiementMethodId = $paiementMethod ? $paiementMethod->id : 1;

        // Get delivery method ID from the database based on the selected name
        $deliveryMethod = DeliveryMethod::where('name', $request->input('deliveryMethod'))->first();
        $deliveryMethodId = $deliveryMethod ? $deliveryMethod->id : 3;

        // dd(Auth::id());
        // dd($paiementMethodId);
        # code...        // Create a new order
        $order = Order::create([
            'total_price' => $totalPrice,
            // 'customer_info' => 'Customer info placeholder',
            'user_id' => Auth::id(),
            'paiement_method_id' => $paiementMethodId,
            'delivery_method_id' => $deliveryMethodId,
        ]);

        // Associate products with the order in the pivot table
        foreach ($cartData as $product) {
            OrderProduct::create([
                'order_id' => $order->id,
                'product_id' => $product['id'],
                'quantity' => $product['quantity'],
            ]);
        }

        // Clear the cart after placing the order
        // You may need to adjust this based on how you handle the cart
        // e.g., removing items from the database or session
        // unset($_SESSION['cart']);

        $orderId = $order->id;
        // dd($order);
        Mail::to($request->user()->email)->send(new OrderPlaced($order));

        // Redirect to the order confirmation page with the order ID
        return redirect()->route('order.confirmation', ['id' => $orderId]);
    }
}
