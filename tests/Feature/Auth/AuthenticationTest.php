<?php

use App\Models\Core\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('login screen can be rendered', function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

// test('users can authenticate using the login screen', function () {
//     $user = User::factory()->create([
//         'password' => Hash::make('password'),
//     ]);

//     $response = $this->post('/login', [
//         'email' => $user->email,
//         'password' => 'password',
//     ]);

//     $this->assertAuthenticatedAs($user);
//     $response->assertRedirect(route('dashboard', absolute: false));
// });

test('users cannot authenticate with invalid password', function () {
    $user = User::factory()->create([
        'password' => bcrypt('password'),
    ]);

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
    $response->assertStatus(302);
    $response->assertSessionHasErrors('email');
});

test('users can logout', function () {
    $user = User::factory()->create([
        'password' => bcrypt('password'),
    ]);

    // login menggunakan guard 'web'
    $response = $this->actingAs($user, 'web')->post('/logout');

    $response->assertRedirect('/'); // sesuai controller

    $this->assertGuest('web'); // pastikan user sudah logout dari guard 'web'
});
