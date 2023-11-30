<?php

// OrderController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Inertia\Inertia;
use App\Models\PaiementMethod;
use App\Models\DeliveryMethod;
use App\Models\OrderProduct;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function confirmation($id)
    {
        // Retrieve the order based on the provided ID
        $order = Order::findOrFail($id);

        // Check if the authenticated user is the owner of the order
        if (auth()->id() !== $order->user_id) {
            abort(403, 'Unauthorized');
        }

        $paiementMethodName = PaiementMethod::find($order->paiement_method_id)->name;
        $deliveryMethodName = DeliveryMethod::find($order->delivery_method_id)->name;



        // Retrieve order products
        $orderProducts = $order->products;

        // Return the order confirmation view with the order data and method names
        return Inertia::render('OrderConfirmation', [
            'order' => $order,
            'paiementMethodName' => $paiementMethodName,
            'deliveryMethodName' => $deliveryMethodName,
            'orderProducts' => $orderProducts,
        ]);
    }

    public function getOrders(Request $request)
    {
        $user_id = Auth::id();
        $orders = Order::with(['products', 'paiementMethod', 'deliveryMethod'])
            ->where('user_id', $user_id)->get();

        // dd($orders);

        // foreach ($orders as $order) {
        //     $paiementMethod = PaiementMethod::find($order->paiement_method_id)->name;
        //     $deliveryMethod = DeliveryMethod::find($order->delivery_method_id)->name;
        // }

        return Inertia::render('SeeOrders', [
            'orders' => $orders,
        ]);
    }
    public function getOrder($id)
    {
        $user_id = Auth::id();
        $order = Order::with(['products', 'paiementMethod', 'deliveryMethod'])
            ->where('id', $id)->where('user_id', $user_id)->get();

        return Inertia::render('ShowOrder', [
            'order' => $order,
        ]);
    }
}
