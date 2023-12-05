<?php

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
        return Inertia::render('Checkout');
    }

    public function placeOrder(Request $request)
    {
        $cartData = $request->input('products', []);
        $totalPrice = collect($cartData)->sum(function ($product) {
            return $product['quantity'] * $product['price'];
        });

        $paiementInput = $request->paiementMethod;
        $deliveryInput = $request->deliveryMethod;


        $paiementMethod = PaiementMethod::findOrFail($paiementInput);
        $deliveryMethod = DeliveryMethod::findOrFail($deliveryInput);

        $paiementMethodId = $paiementMethod->id;
        $deliveryMethodId = $deliveryMethod->id;



        $order = Order::create([
            'total_price' => $totalPrice,
            'user_id' => Auth::id(),
            'paiement_method_id' => $paiementMethodId,
            'delivery_method_id' => $deliveryMethodId,
        ]);
        foreach ($cartData as $product) {
            OrderProduct::create([
                'order_id' => $order->id,
                'product_id' => $product['id'],
                'quantity' => $product['quantity'],
            ]);
        }

        $orderId = $order->id;
        Mail::to($request->user()->email)->send(new OrderPlaced($order));

        return redirect()->route('order.confirmation', ['id' => $orderId]);
    }
}
