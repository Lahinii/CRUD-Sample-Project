<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller {
    
    // Get all products with category
    public function index() {
        return Product::with('category')->get();
    }

    // Store a new product with a category
    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'required',
            'category_id' => 'required|exists:categories,id'
        ]);

        return Product::create($request->all());
    }

    // Show a single product with category
    public function show($id) {
        return Product::with('category')->findOrFail($id);
    }

    // Update product
    public function update(Request $request, $id) {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
    }

    // Delete product
    public function destroy($id) {
        return Product::destroy($id);
    }
}

