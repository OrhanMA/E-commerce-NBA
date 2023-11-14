<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Subcategory extends Model
{
    use CrudTrait;
    use HasFactory;
    protected $fillable = ['name'];
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
