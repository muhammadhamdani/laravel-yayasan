<?php

namespace App\Models\Fundraising;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rekening extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'provider_id',
        'name',
        'number',
        'group',
        'token',
        'status',
        'icon',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Relasi ke provider rekening (Midtrans, Moota, dll)
     */
    public function provider(): BelongsTo
    {
        return $this->belongsTo(RekeningProvider::class, 'provider_id');
    }
}
