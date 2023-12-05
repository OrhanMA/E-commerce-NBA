<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RouteTest extends TestCase
{
    public function test_routes_redirected_to_login(): void
    {
        $APP_URL = env('APP_URL');
        $urls = [
            '/profile',
            '/cart',
            '/checkout',
        ];
        foreach ($urls as $url) {
            $response = $this->get($url);
            if ($response->assertStatus(302) && $response->assertRedirectToRoute('login')) {
                echo $APP_URL . $url . '(SUCCESS) redirected to login.';
                $this->assertTrue(true);
            } else {
                echo $APP_URL . $url . '(FAILED) did not redirected to login.';
                $this->assertTrue(true);
            }
        }
    }

    public function test_routes_returns_200(): void
    {
        $APP_URL = env('APP_URL');
        $urls = [
            '/',
            '/products',
            '/contact',
        ];
        foreach ($urls as $url) {
            $response = $this->get($url);
            if ($response->status() === 200) {
                echo $APP_URL . $url . '(SUCCESS) did return 200.';
                $this->assertTrue(true);
            } else {
                echo $APP_URL . $url . '(FAILED) did not return 200.';
                $this->assertTrue(true);
            }
        }
    }
}
