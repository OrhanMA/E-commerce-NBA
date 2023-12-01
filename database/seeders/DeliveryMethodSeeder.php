<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\DeliveryMethod;

class DeliveryMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $delivery_methods = [
            [
                "name" => "standard",
            ],
            [
                "name" => "express",
            ],
            [
                "name" => "click&collect",
            ],
        ];

        $timestamp = Carbon::now();

        foreach ($delivery_methods as $delivery_methods_data) {
            $delivery_methods['created_at'] = $timestamp;
            $delivery_methods['updated_at'] = $timestamp;

            DeliveryMethod::create($delivery_methods_data);
        }
    }
}
