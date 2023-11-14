<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use App\Models\Category;

class ProductController extends Controller
{
    //
    public function getAll(Request $request)
    {
        $products = Product::query()->paginate(10);
        // $products = Product::query()->get();
        // dump($products);
        return Inertia::render('AllProducts', [
            'products' => $products,
        ]);
    }
    // In your ProductController or SearchControllerm rn
    public function getCategoryProducts(Request $request, string $category)
    {
        $sortBy = $request->input('sort_by', 'name'); // Default to sorting by name
        $sortOrder = $request->input('sort_order', 'asc'); // Default to ascending order

        $categoryModel = Category::where('name', $category)->first();

        if (!$categoryModel) {
            // Handle case where category does not exist
            return response()->json(['error' => 'Category not found'], 404);
        }

        $categoryId = $categoryModel->id;

        $productsQuery = Product::where('category_id', $categoryId);

        // Add sorting by price
        if ($sortBy === 'price') {
            $productsQuery->orderBy('price', $sortOrder);
        } else {
            $productsQuery->orderBy('name', $sortOrder);
        }

        $products = $productsQuery->get();
        return Inertia::render('CategoryResults', [
            'products' => $products,
            'category' => $category,
            'sort_by' => $sortBy,
            'sort_order' => $sortOrder,
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        $category = $request->input('category');
        $sortBy = $request->input('sort_by', 'name');
        $sortOrder = $request->input('sort_order', 'asc');

        $productsQuery = Product::query();

        $productsQuery->join('categories', 'products.category_id', '=', 'categories.id')
            ->leftJoin('subcategories', 'products.subcategory_id', '=', 'subcategories.id');

        if ($query) {
            $productsQuery->where(function ($q) use ($query) {
                $q->where('products.name', 'like', "%$query%")
                    ->orWhere('products.description', 'like', "%$query%");
            });

        }

        if ($category) {
            if (is_numeric($category)) {
                $productsQuery->where('category_id', $category);
            } else {
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
            $productsQuery->orderBy('products.name', $sortOrder);
        }

        $products = $productsQuery->get([
            'products.*',
            'categories.name as category_name',
            'subcategories.name as subcategory_name',
        ]);

        return Inertia::render('SearchResults', [
            'products' => $products,
            'query' => $query,
            'category' => $category,
            'sortBy' => $sortBy,
            'sortOrder' => $sortOrder,
        ]);
    }

}

// ...&sort_order=desc is sort z to a no price sort
// ...&sort_order=asc and ...(no sort_order specified) sort a to z
// ...&sort_by=price sort price - to +
//    ...&sort_by=price&sort_order=desc sort price + to -
