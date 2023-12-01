<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->decimal('total_price', 8, 2);
            $table->timestamps();

            $table->uuid('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('paiement_method_id')->default(1);
            $table->unsignedBigInteger('delivery_method_id')->default(3);

            $table->foreign('paiement_method_id')->references('id')->on('paiement_methods');
            $table->foreign('delivery_method_id')->references('id')->on('delivery_methods');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
