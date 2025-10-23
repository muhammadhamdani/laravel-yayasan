<?php

namespace App\Http\Controllers\Auth;

use App\Models\Core\User;
use App\Models\Core\Social;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(string $provider)
    {
        $response = Socialite::driver($provider)->user();

        $user = User::where('email', $response->getEmail())->first();
        $name = $response->getNickname() ?? $response->getName();

        if (!$user) {
            return redirect()->route('login')->with('error', 'User not found!');
        }

        $socials = Social::where('user_id', $user->id)
            ->where('provider', $provider)
            ->first();

        if (!$socials) {
            $user->socials()->create([
                'provider_id' => $response->getId(),
                'provider' => $provider,
                'provider_token' => $response->token,
                'provider_refresh_token' => $response->refreshToken
            ]);
        }

        Auth::login($user);

        return redirect()->intended(route('admin.dashboard', absolute: false))->with('success', 'You are logged in!');
    }
}
