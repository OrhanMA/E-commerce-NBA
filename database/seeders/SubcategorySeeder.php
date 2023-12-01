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
                "name" => 'authentic'
            ],
            [
                "name" => 'city edition'
            ],
            [
                "name" => 'pro'
            ],
            [
                "name" => 'NBA franchise'
            ],
            [
                "name" => '75th anniversary'
            ],
            [
                "name" => 'composite'
            ],
            [
                "name" => 'hoodie'
            ],
            [
                "name" => 'shoes'
            ],
            [
                "name" => 'outfit'
            ],
            [
                "name" => 't-shirt'
            ],
            [
                "name" => 'badge'
            ],
            [
                "name" => 'mini-basket'
            ],
            [
                "name" => 'umbrella'
            ],
            [
                "name" => 'pump'
            ],
            [
                "name" => 'key strap'
            ],
            [
                "name" => 'pump'
            ],
            [
                "name" => 'towel'
            ],
            [
                "name" => 'mug'
            ],
            [
                "name" => 'pen'
            ],
            [
                "name" => 'can opener'
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
