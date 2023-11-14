<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

class DeliveryMethod extends Model
{
    use CrudTrait;
    use HasFactory;
    public function orders()
    {
        return $this->hasMany(Order::class, 'delivery_method_id'); // Change to match your actual column name
    }
}
