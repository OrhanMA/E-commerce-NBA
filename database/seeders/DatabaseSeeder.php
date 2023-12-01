<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\CategorySeeder;
use Database\Seeders\SubcategorySeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\ProductSeeder;
use Database\Seeders\PaiementMethodSeeder;
use Database\Seeders\DeliveryMethodSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            SubcategorySeeder::class,
            ProductSeeder::class,
            PaiementMethodSeeder::class,
            DeliveryMethodSeeder::class,
        ]);
    }
}
