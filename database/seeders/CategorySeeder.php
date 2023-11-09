<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $categories = [
            [
                "name" => "Jerseys"
            ],
            [
                "name" => "Clothing"
            ],
            [
                "name" => "Basketballs"
            ],
            [
                "name" => "Goodies"
            ],
            [
                "name" => "Other"
            ],
        ];

        $timestamp = Carbon::now();

        foreach ($categories as $categoryData) {
            $category['created_at'] = $timestamp;
            $category['updated_at'] = $timestamp;

            Category::create($categoryData);
        }

        // DB::table('categories')->insert($categories);
    }
}
