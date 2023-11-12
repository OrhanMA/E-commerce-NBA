<?php

// OrderController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Inertia\Inertia;
use App\Models\PaiementMethod;
use App\Models\DeliveryMethod;

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

        // Retrieve paiement method and delivery method names based on their IDs
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
}
