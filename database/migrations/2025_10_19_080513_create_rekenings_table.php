<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rekenings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_id')->constrained('rekening_providers')->cascadeOnDelete();
            $table->string('name');
            $table->string('number');
            $table->enum('group', ['bank_transfer', 'e_money', 'direct_debit', 'convenience_store', 'cardless_credit'])->default('bank_transfer');
            $table->string('token')->nullable();
            $table->boolean('status')->default(true);
            $table->string('icon')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rekenings');
    }
};
