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
        Schema::create('campaigns', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('excerpt');
            $table->text('description');
            $table->enum('template', ['T1', 'T2', 'T3', 'T4', 'T5'])->default('T1');
            $table->integer('nominal')->default(0);
            $table->text('nominal_choice')->nullable();
            $table->integer('paket_id')->default(0);
            $table->string('featured_image')->nullable();
            $table->boolean('status')->default(true);
            $table->boolean('recommended')->default(false);
            $table->foreignId('category_id')->constrained('category_campaigns')->cascadeOnUpdate('cascade')->cascadeOnDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->cascadeOnUpdate('cascade')->cascadeOnDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaigns');
    }
};
