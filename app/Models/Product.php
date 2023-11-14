<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Subcategory;
use App\Models\Category;

class Product extends Model
{
    use CrudTrait;
    use HasFactory;
    protected $fillable = ['name', 'description', 'category_id', 'subcategory_id', 'price', 'stock', 'image_path'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }
}
