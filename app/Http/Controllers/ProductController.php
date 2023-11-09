<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

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

        if ($query) {
            $productsQuery->where('name', 'like', "%$query%")
                ->orWhere('description', 'like', "%$query%");
        }

        if ($category) {
            $productsQuery->where('category', $category);
        }

        $products = $productsQuery->orderBy($sortBy, $sortOrder)->get();

        return Inertia::render('SearchResults', [
            'products' => $products,
            'query' => $query,
            'sortBy' => $sortBy,
            'sortOrder' => $sortOrder,
        ]);
    }

}
