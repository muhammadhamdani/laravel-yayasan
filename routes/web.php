<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Cms\TagController;
use App\Http\Controllers\Admin\Cms\PageController;
use App\Http\Controllers\Admin\Cms\PostController;
use App\Http\Controllers\Admin\Core\RoleController;
use App\Http\Controllers\Admin\Core\UserController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\Cms\CategoryController;
use App\Http\Controllers\Admin\Core\PermissionController;
use App\Http\Controllers\Admin\Fundraising\RekeningController;
use App\Http\Controllers\Admin\Fundraising\RekeningProviderController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->prefix('admin')->as('admin.')->group(function () {
    Route::redirect('', 'admin/dashboard');
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('core')->as('core.')->group(function () {
        Route::get('permissions/data', [PermissionController::class, 'getData'])->name('permissions.data');
        Route::resource('permissions', PermissionController::class);

        Route::get('roles/access', [RoleController::class, 'manageAccessRole'])->name('roles.access');
        Route::post('roles/access', [RoleController::class, 'assignAccessRole'])->name('roles.access.assign');
        Route::get('roles/data', [RoleController::class, 'getData'])->name('roles.data');
        Route::resource('roles', RoleController::class);

        Route::post('users/verify', [UserController::class, 'verify'])->name('users.verify');
        Route::get('users/data', [UserController::class, 'getData'])->name('users.data');
        Route::resource('users', UserController::class);
    });

    Route::prefix('cms')->as('cms.')->group(function () {
        Route::get('categories/data', [CategoryController::class, 'getData'])->name('categories.data');
        Route::resource('categories', CategoryController::class);

        Route::get('posts/data', [PostController::class, 'getData'])->name('posts.data');
        Route::resource('posts', PostController::class);

        Route::get('tags/data', [TagController::class, 'getData'])->name('tags.data');
        Route::resource('tags', TagController::class);

        Route::get('pages/data', [PageController::class, 'getData'])->name('pages.data');
        Route::resource('pages', PageController::class);

        // Route::get('sliders/data', [SliderController::class, 'getData'])->name('sliders.data');
        // Route::resource('sliders', SliderController::class);

        // Route::get('analytics/data', [AnalyticController::class, 'getData'])->name('analytics.data');
        // Route::get('analytics', [AnalyticController::class, 'index'])->name('analytics.index');
    });

    Route::prefix('fundraising')->as('fundraising.')->group(function () {
        Route::get('rekening-providers/data', [RekeningProviderController::class, 'getData'])->name('rekening-providers.data');
        Route::resource('rekening-providers', RekeningProviderController::class);

        Route::get('rekenings/data', [RekeningController::class, 'getData'])->name('rekenings.data');
        Route::resource('rekenings', RekeningController::class);
    });
});

Route::middleware(['auth', 'role:Admin'])->group(function () {
    Route::view('/log-viewer/{any?}', 'log-viewer::index')
        ->where('any', '.*')
        ->name('log-viewer');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
