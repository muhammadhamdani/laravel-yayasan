<?php

namespace App\Models\Fundraising;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class RekeningProvider extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'api_key',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Relasi ke semua rekening di bawah provider ini.
     */
    public function rekenings(): HasMany
    {
        return $this->hasMany(Rekening::class, 'provider_id');
    }
}
