<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Sample product data
        $products = [
            [
                "name" => "Altanta Hawks NBA Jersey",
                "description" => "Official Jersey of the Atlanta Hawks NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/hawks-jersey.jpg"
            ],
            [
                "name" => "Boston Celtics NBA Jersey",
                "description" => "Official Jersey of the Boston Celtics NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/celtics-jersey.avif"
            ],
            [
                "name" => "Brooklyn Nets NBA Jersey",
                "description" => "Official Jersey of the Brooklyn Nets NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/nets-jersey.avif"
            ],
            [
                "name" => "Charlotte Hornets NBA Jersey",
                "description" => "Official Jersey of the Charlotte Hornets NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/hornets-jersey.avif"
            ],
            [
                "name" => "Chicago Bulls NBA Jersey",
                "description" => "Official Jersey of the Chicago Bulls NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/bulls-jersey.jpg"
            ],
            [
                "name" => "Cleveland Cavaliers NBA Jersey",
                "description" => "Official Jersey of the Cleveland Cavaliers NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/cavs-jersey.avif"
            ],
            [
                "name" => "Dallas Mavericks NBA Jersey",
                "description" => "Official Jersey of the Dallas Mavericks NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/mavs-jersey.avif"
            ],
            [
                "name" => "Denver Nuggets NBA Jersey",
                "description" => "Official Jersey of the Denver Nuggets NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/nuggets-jersey.avif"
            ],
            [
                "name" => "Detroit Pistons NBA Jersey",
                "description" => "Official Jersey of the Detroit Pistons NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/pistons-jersey.jpg"
            ],
            [
                "name" => "Golden State Warriors NBA Jersey",
                "description" => "Official Jersey of the Golden State Warriors NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/warriors-jersey.webp"
            ],
            [
                "name" => "Houston Rockets NBA Jersey",
                "description" => "Official Jersey of the Houston Rockets NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/rockets-jersey.webp"
            ],
            [
                "name" => "Indiana Pacers NBA Jersey",
                "description" => "Official Jersey of the Indiana Pacers NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/pacers-jersey.avif"
            ],
            [
                "name" => "LA Clippers NBA Jersey",
                "description" => "Official Jersey of the LA Clippers NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/clippers-jersey.avif"
            ],
            [
                "name" => "Los Angeles Lakers NBA Jersey",
                "description" => "Official Jersey of the Los Angeles Lakers NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/lakers-jersey.webp"
            ],
            [
                "name" => "Memphis Grizzlies NBA Jersey",
                "description" => "Official Jersey of the Memphis Grizzlies NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/grizzlies-jersey.avif"
            ],
            [
                "name" => "Miami Heat NBA Jersey",
                "description" => "Official Jersey of the Miami Heat NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/heat-jersey.avif"
            ],
            [
                "name" => "Milwaukee Bucks NBA Jersey",
                "description" => "Official Jersey of the Milwaukee Bucks NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/bucks-jersey.avif"
            ],
            [
                "name" => "Minnesota Timberwolves NBA Jersey",
                "description" => "Official Jersey of the Minnesota Timberwolves NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/wolves-jersey.webp"
            ],
            [
                "name" => "New Orleans Pelicans NBA Jersey",
                "description" => "Official Jersey of the New Orleans Pelicans NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/pelicans-jersey.webp"
            ],
            [
                "name" => "New York Knicks NBA Jersey",
                "description" => "Official Jersey of the New York Knicks NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/knicks-jersey.avif"
            ],
            [
                "name" => "Oklahoma City Thunder NBA Jersey",
                "description" => "Official Jersey of the Oklahoma City Thunder NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/thunder-jersey.webp"
            ],
            [
                "name" => "Orlando Magic NBA Jersey",
                "description" => "Official Jersey of the Orlando Magic NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/magic-jersey.avif"
            ],
            [
                "name" => "Philadelphia 76ers NBA Jersey",
                "description" => "Official Jersey of the Philadelphia 76ers NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/sixers-jersey.webp"
            ],
            [
                "name" => "Phoenix Suns NBA Jersey",
                "description" => "Official Jersey of the Phoenix Suns NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/suns-jersey.webp"
            ],
            [
                "name" => "Portland Trail Blazers NBA Jersey",
                "description" => "Official Jersey of the Portland Trail Blazers NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/blazers-jersey.avif"
            ],
            [
                "name" => "Sacramento Kings NBA Jersey",
                "description" => "Official Jersey of the Sacramento Kings NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/kings-jersey.avif"
            ],
            [
                "name" => "San Antonio Spurs NBA Jersey",
                "description" => "Official Jersey of the San Antonio Spurs NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/spurs-jersey.webp"
            ],
            [
                "name" => "Toronto Raptors NBA Jersey",
                "description" => "Official Jersey of the Toronto Raptors NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/raptors-jersey.avif"
            ],
            [
                "name" => "Utah Jazz NBA Jersey",
                "description" => "Official Jersey of the Utah Jazz NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/jazz-jersey.avif"
            ],
            [
                "name" => "Washington Wizards NBA Jersey",
                "description" => "Official Jersey of the Washington Wizards NBA franchise",
                "category_id" => 1,
                "subcategory_id" => 4,
                "price" => rand(60, 120),
                "stock" => 100,
                "image_path" => "product_images/jerseys/wizards-jersey.webp"
            ],



            [
                "name" => "Authentic Wilson Indoor Ball",
                "description" => "The authentic Wilson Indoor Ball made by Wilson. Ready for NBA games.",
                "category_id" => 3,
                "subcategory_id" => 1,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/authentic-indoor-wilson.avif"
            ],
            [
                "name" => "Wilson NBA 75th Anniversary Ball",
                "description" => "The basketball celebrating the NBA's 75th anniversary",
                "category_id" => 3,
                "subcategory_id" => 5,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/wilson-75-anniversary.avif"
            ],
            [
                "name" => "Lakers Composite Ball",
                "description" => "A composite basketball for the Lakers fans looking for high-quality balls.",
                "category_id" => 3,
                "subcategory_id" => 4,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/lakers-composite.avif"
            ],
            [
                "name" => "Warriors Composite Ball",
                "description" => "A composite basketball for the Warriors fans looking for high-quality balls.",
                "category_id" => 3,
                "subcategory_id" => 4,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/warriors-composite.webp"
            ],
            [
                "name" => "Wilson DRV-PRO Ball",
                "description" => "A Wilson basketball for indoor and outdoor ",
                "category_id" => 3,
                "subcategory_id" => 3,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/authentic-indoor-wilson.avif"
            ],
            [
                "name" => "Bulls Wilson Ball",
                "description" => "A Wilson Indoor Ball for Bulls fans.",
                "category_id" => 3,
                "subcategory_id" => 4,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/bulls-wilson.avif"
            ],
            [
                "name" => "Celtics Wilson Ball",
                "description" => "A Wilson Indoor Ball for Celtics fans.",
                "category_id" => 3,
                "subcategory_id" => 4,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/celtics-wilson.avif"
            ],
            [
                "name" => "Lakers Wilson Ball",
                "description" => "A Wilson Indoor Ball for Lakers fans.",
                "category_id" => 3,
                "subcategory_id" => 4,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/lakers-wilson.webp"
            ],
            [
                "name" => "Nets Wilson Ball",
                "description" => "A Wilson Indoor Ball for Nets fans.",
                "category_id" => 3,
                "subcategory_id" => 4,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/nets-wilson.webp"
            ],
            [
                "name" => "Bucks City Edition Ball",
                "description" => "The City Edition basketball for all Bucks fans.",
                "category_id" => 3,
                "subcategory_id" => 2,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/bucks-city.webp"
            ],
            [
                "name" => "Spurs City Edition Ball",
                "description" => "The City Edition basketball for all Spurs fans.",
                "category_id" => 3,
                "subcategory_id" => 2,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/spurs-city.jpg"
            ],
            [
                "name" => "Suns City Edition Ball",
                "description" => "The City Edition basketball for all Suns fans.",
                "category_id" => 3,
                "subcategory_id" => 2,
                "price" => rand(35, 50),
                "stock" => 50,
                "image_path" => "product_images/basketballs/suns-city.jpg"
            ],




            [
                "name" => "Hoodie Chicago Bulls",
                "description" => "Black hoodie for Bulls fans",
                "category_id" => 2,
                "subcategory_id" => 7,
                "price" => 80,
                "stock" => 150,
                "image_path" => "product_images/clothing/hoodie-bulls.avif"
            ],
            [
                "name" => "Hoodie Phoenix Suns",
                "description" => "Black hoodie for Suns fans",
                "category_id" => 2,
                "subcategory_id" => 7,
                "price" => 80,
                "stock" => 150,
                "image_path" => "product_images/clothing/hoodie-suns.avif"
            ],
            [
                "name" => "Basketball Shoes Nike Zoom Freak",
                "description" => "Giannis official basketball shoes to give your best on court.",
                "category_id" => 2,
                "subcategory_id" => 8,
                "price" => 120,
                "stock" => 150,
                "image_path" => "product_images/clothing/shoes-zoom-freak.avif"
            ],
            [
                "name" => "Celtics City Edition Outfit",
                "description" => "2023-2024 Season City Edition Outfit for Celtics fans.",
                "category_id" => 2,
                "subcategory_id" => 9,
                "price" => 140,
                "stock" => 150,
                "image_path" => "product_images/clothing/survetement-celtics.avif"
            ],
            [
                "name" => "Heat T-shirt",
                "description" => "T-shirt for Heat fans.",
                "category_id" => 2,
                "subcategory_id" => 10,
                "price" => 40,
                "stock" => 150,
                "image_path" => "product_images/clothing/t-shirt-heat.avif"
            ],
            [
                "name" => "Hornets T-shirt",
                "description" => "T-shirt for Hornets fans.",
                "category_id" => 2,
                "subcategory_id" => 10,
                "price" => 40,
                "stock" => 150,
                "image_path" => "product_images/clothing/t-shirt-hornets.avif"
            ],
            [
                "name" => "Nets T-shirt",
                "description" => "T-shirt for Nets fans.",
                "category_id" => 2,
                "subcategory_id" => 10,
                "price" => 40,
                "stock" => 150,
                "image_path" => "product_images/clothing/t-shirt-nets.avif"
            ],



            [
                "name" => "Badges Celtics",
                "description" => "Badges for Celtics fans.",
                "category_id" => 4,
                "subcategory_id" => 11,
                "price" => 10.00,
                "stock" => 50,
                "image_path" => "product_images/goodies/badge-celtics.avif"
            ],
            [
                "name" => "Mini-basket Warriors",
                "description" => "A mini basket with a small ball to put everywhere you want designed for Warriors fans.",
                "category_id" => 4,
                "subcategory_id" => 12,
                "price" => 35.00,
                "stock" => 50,
                "image_path" => "product_images/goodies/mini-basket-warriors.avif"
            ],
            [
                "name" => "Umbrella Warriors",
                "description" => "An umbrella for Warriors fans.",
                "category_id" => 4,
                "subcategory_id" => 13,
                "price" => 15.00,
                "stock" => 50,
                "image_path" => "product_images/goodies/parapluie-warriors.avif"
            ],
            [
                "name" => "Key Strap Lakers",
                "description" => "A key strap for Lakers fans.",
                "category_id" => 4,
                "subcategory_id" => 15,
                "price" => 7.00,
                "stock" => 50,
                "image_path" => "product_images/goodies/sangle-cles-lakers.avif"
            ],
            [
                "name" => "NBA Pump",
                "description" => "A pump to inflate your balls all year long.",
                "category_id" => 4,
                "subcategory_id" => 14,
                "price" => 15.00,
                "stock" => 50,
                "image_path" => "product_images/goodies/pompe-nba.webp"
            ],


            [
                "name" => "Chicago Bulls Towel",
                "description" => "A Towel for Bulls fans.",
                "category_id" => 5,
                "subcategory_id" => 17,
                "price" => 15.00,
                "stock" => 150,
                "image_path" => "product_images/other/bulls-towel.avif"
            ],
            [
                "name" => "Thunder Towel",
                "description" => "A Towel for Thunder fans.",
                "category_id" => 5,
                "subcategory_id" => 17,
                "price" => 15.00,
                "stock" => 150,
                "image_path" => "product_images/other/thunder-towel.jpg"
            ],
            [
                "name" => "Brooklyn Nets Can Opener",
                "description" => "A Can Opener for Brooklyn Nets fans.",
                "category_id" => 5,
                "subcategory_id" => 20,
                "price" => 5.00,
                "stock" => 150,
                "image_path" => "product_images/other/can-opener-nets.avif"
            ],
            [
                "name" => "Lakers Mug",
                "description" => "A Mug for Lakers fans.",
                "category_id" => 5,
                "subcategory_id" => 18,
                "price" => 10.00,
                "stock" => 150,
                "image_path" => "product_images/other/lakers-mug.avif"
            ],
            [
                "name" => "Mavs Mug",
                "description" => "A Mug for Mavs fans.",
                "category_id" => 5,
                "subcategory_id" => 18,
                "price" => 10.00,
                "stock" => 150,
                "image_path" => "product_images/other/mavs-mug.avif"
            ],
            [
                "name" => "Lakers Pen",
                "description" => "A Pen for Lakers fans.",
                "category_id" => 5,
                "subcategory_id" => 18,
                "price" => 15.00,
                "stock" => 150,
                "image_path" => "product_images/other/lakers-pen.avif"
            ],


            // Add more products as needed
        ];

        // Add timestamps to each product
        $timestamp = Carbon::now();

        foreach ($products as $productData) {
            $productData['created_at'] = $timestamp;
            $productData['updated_at'] = $timestamp;

            Product::create($productData);
        }

        // Insert data into the products table
        // DB::table('products')->insert($products);
    }
}
