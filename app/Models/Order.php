<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Product;

class Order extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'total_price',
        'paiement_method',
        'delivery_method',
        // 'customer_info',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity');
    }
    public function paiementMethod()
    {
        return $this->belongsTo(PaiementMethod::class, 'paiement_method_id'); // Change to match your actual column name
    }

    public function deliveryMethod()
    {
        return $this->belongsTo(DeliveryMethod::class, 'delivery_method_id'); // Change to match your actual column name
    }
}
