<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use CrudTrait;
    protected $table = 'order_product';

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
    ];

}
