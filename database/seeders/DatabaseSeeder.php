<?php

namespace Database\Seeders;

use App\Models\Core\Role;
use App\Models\Core\User;
use App\Models\Core\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        collect([
            ['name' => 'Administrators'],
            ['name' => 'Users'],
        ])->each(fn($role) => Role::create($role));

        collect([
            ['name' => 'view-permission'],
            ['name' => 'create-permission'],
            ['name' => 'update-permission'],
            ['name' => 'delete-permission'],
            ['name' => 'data-permission'],
            ['name' => 'view-role'],
            ['name' => 'create-role'],
            ['name' => 'update-role'],
            ['name' => 'delete-role'],
            ['name' => 'data-role'],
            ['name' => 'view-user'],
            ['name' => 'create-user'],
            ['name' => 'update-user'],
            ['name' => 'delete-user'],
            ['name' => 'data-user'],
            ['name' => 'verify-user'],
            ['name' => 'view-category'],
            ['name' => 'create-category'],
            ['name' => 'update-category'],
            ['name' => 'delete-category'],
            ['name' => 'data-category'],
            ['name' => 'view-tag'],
            ['name' => 'create-tag'],
            ['name' => 'update-tag'],
            ['name' => 'delete-tag'],
            ['name' => 'data-tag'],
            ['name' => 'view-post'],
            ['name' => 'create-post'],
            ['name' => 'update-post'],
            ['name' => 'delete-post'],
            ['name' => 'data-post'],
            ['name' => 'view-page'],
            ['name' => 'create-page'],
            ['name' => 'update-page'],
            ['name' => 'delete-page'],
            ['name' => 'data-page'],
            ['name' => 'view-slider'],
            ['name' => 'create-slider'],
            ['name' => 'update-slider'],
            ['name' => 'delete-slider'],
            ['name' => 'data-slider'],
            ['name' => 'view-analytics'],
            ['name' => 'view-rekening-provider'],
            ['name' => 'create-rekening-provider'],
            ['name' => 'update-rekening-provider'],
            ['name' => 'delete-rekening-provider'],
            ['name' => 'data-rekening-provider'],
            ['name' => 'view-rekening'],
            ['name' => 'create-rekening'],
            ['name' => 'update-rekening'],
            ['name' => 'delete-rekening'],
            ['name' => 'data-rekening'],
        ])->each(fn($permission) => Permission::create($permission)->assignRole('Administrators'));

        User::create([
            'name' => 'Administrator',
            'email' => 'muhammadhamdani017@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make(hexdec(uniqid())),
        ])->assignRole('Administrators');

        $this->call([
            CmsSeeder::class,
            FundraisingSeeder::class,
        ]);
    }
}
