<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fundraising\Rekening;
use App\Models\Fundraising\RekeningProvider;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FundraisingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Midtrans',
                'api_key' => 'MIDTRANS-API-KEY-EXAMPLE',
                'status' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Moota',
                'api_key' => 'MOOTA-API-KEY-EXAMPLE',
                'status' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ])->each(fn($data) => RekeningProvider::create($data));

        collect([
            // 🏦 Bank Transfer
            ['name' => 'BCA Virtual Account', 'number' => 'bca_va', 'group' => 'bank_transfer', 'icon' => 'icons/bca.png', 'token' => 'bca'],
            ['name' => 'BNI Virtual Account', 'number' => 'bni_va', 'group' => 'bank_transfer', 'icon' => 'icons/bni.png', 'token' => 'bni'],
            ['name' => 'BRI Virtual Account', 'number' => 'bri_va', 'group' => 'bank_transfer', 'icon' => 'icons/bri.png', 'token' => 'bri'],
            ['name' => 'Mandiri Bill Payment', 'number' => 'mandiri_bill', 'group' => 'bank_transfer', 'icon' => 'icons/mandiri.png', 'token' => 'echannel'],
            ['name' => 'Permata Virtual Account', 'number' => 'permata_va', 'group' => 'bank_transfer', 'icon' => 'icons/permata.png', 'token' => 'permata'],
            ['name' => 'CIMB Niaga Virtual Account', 'number' => 'cimb_va', 'group' => 'bank_transfer', 'icon' => 'icons/cimb.png', 'token' => 'cimb'],

            // 💰 E-Money
            ['name' => 'GoPay', 'number' => 'gopay', 'group' => 'e_money', 'icon' => 'icons/gopay.png', 'token' => 'gopay'],
            ['name' => 'ShopeePay', 'number' => 'shopeepay', 'group' => 'e_money', 'icon' => 'icons/shopeepay.png', 'token' => 'shopeepay'],
            ['name' => 'DANA', 'number' => 'dana', 'group' => 'e_money', 'icon' => 'icons/dana.png', 'token' => 'dana'],
            ['name' => 'QRIS', 'number' => 'qris', 'group' => 'e_money', 'icon' => 'icons/qris.png', 'token' => 'qris'],
        ])->each(fn($data) => Rekening::create([
            'provider_id' => 1,
            'name' => $data['name'],
            'number' => $data['number'],
            'group' => $data['group'],
            'token' => $data['token'],
            'status' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]));
    }
}
