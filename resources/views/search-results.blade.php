<!-- resources/views/search_results.blade.php -->

<h1>Search Results for "{{ $query }}"</h1>

@foreach($products as $product)
    <p>{{ $product->name }}</p>
    <p>{{ $product->id }}</p>
@endforeach
