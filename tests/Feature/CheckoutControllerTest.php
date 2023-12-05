<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Order;
use App\Models\PaiementMethod;
use App\Models\DeliveryMethod;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class CheckoutControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_checkout_page_can_be_rendered()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/checkout');

        $response->assertStatus(Response::HTTP_OK)
            ->assertSee('Checkout');
    }


}
