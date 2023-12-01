<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\PaiementMethod;

class PaiementMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $paiement_methods = [
            [
                "name" => "Card",
            ],
            [
                "name" => "Cash",
            ],
            [
                "name" => "Transfert",
            ],
        ];

        $timestamp = Carbon::now();

        foreach ($paiement_methods as $paiement_methods_data) {
            $paiement_methods['created_at'] = $timestamp;
            $paiement_methods['updated_at'] = $timestamp;

            PaiementMethod::create($paiement_methods_data);
        }
    }
}
