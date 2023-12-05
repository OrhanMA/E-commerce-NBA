<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\Subcategory;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcategories = [
            [
                "name" => 'Authentic'
            ],
            [
                "name" => 'City edition'
            ],
            [
                "name" => 'Pro'
            ],
            [
                "name" => 'NBA franchise'
            ],
            [
                "name" => '75th anniversary'
            ],
            [
                "name" => 'Composite'
            ],
            [
                "name" => 'Hoodie'
            ],
            [
                "name" => 'Shoes'
            ],
            [
                "name" => 'Outfit'
            ],
            [
                "name" => 'T-shirt'
            ],
            [
                "name" => 'Badge'
            ],
            [
                "name" => 'Mini-basket'
            ],
            [
                "name" => 'Umbrella'
            ],
            [
                "name" => 'Pump'
            ],
            [
                "name" => 'Key strap'
            ],
            [
                "name" => 'Pump'
            ],
            [
                "name" => 'Towel'
            ],
            [
                "name" => 'Mug'
            ],
            [
                "name" => 'Pen'
            ],
            [
                "name" => 'Can opener'
            ],
        ];

        $timestamp = Carbon::now();

        foreach ($subcategories as $subcategoryData) {
            # code...
            $subcategory['created_at'] = $timestamp;
            $subcategory['updated'] = $timestamp;

            Subcategory::create($subcategoryData);
        }
    }
}
