<?php

// OrderProduct.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $table = 'order_product'; // Assuming your pivot table is named 'order_product'

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        // Add other fields as needed
    ];

    // Add any additional relationships or methods you might need
}
