<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use App\Models\Category;

class ProductController extends Controller
{
    //
    // In your ProductController or SearchController

    public function search(Request $request)
    {
        $query = $request->input('query');
        $category = $request->input('category');
        $sortBy = $request->input('sort_by', 'name'); // Default to sorting by name
        $sortOrder = $request->input('sort_order', 'asc'); // Default to ascending order

        $productsQuery = Product::query();

        // Join categories and subcategories
        $productsQuery->join('categories', 'products.category_id', '=', 'categories.id')
            ->leftJoin('subcategories', 'products.subcategory_id', '=', 'subcategories.id');

        if ($query) {
            $productsQuery->where('name', 'like', "%$query%")
                ->orWhere('description', 'like', "%$query%");
        }


        if ($category) {
            // Check if $category is a numeric value (assumed to be category ID)
            if (is_numeric($category)) {
                $productsQuery->where('category_id', $category);
            } else {
                // If $category is a string, assume it's the category name
                $categoryId = Category::where('name', $category)->value('id');

                if ($categoryId) {
                    $productsQuery->where('category_id', $categoryId);
                }
            }
        }

        // Add sorting by price
        if ($sortBy === 'price') {
            $productsQuery->orderBy('price', $sortOrder);
        } else {
            $productsQuery->orderBy($sortBy, $sortOrder);
        }

        $products = $productsQuery->get([
            'products.*',
            // Select all columns from products
            'categories.name as category_name',
            'subcategories.name as subcategory_name',
        ]);

        // dump($products);
        return Inertia::render('SearchResults', [
            'products' => $products,
            'query' => $query,
            'sortBy' => $sortBy,
            'sortOrder' => $sortOrder,
        ]);
    }

}
