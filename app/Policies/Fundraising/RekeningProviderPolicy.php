<?php

namespace App\Policies\Fundraising;

use App\Models\Fundraising\RekeningProvider;
use App\Models\Core\User;
use Illuminate\Auth\Access\Response;

class RekeningProviderPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-rekening-provider');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, RekeningProvider $rekening_provider): bool
    {
        return $user->hasPermissionTo('view-rekening-provider');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-rekening-provider');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, RekeningProvider $rekening_provider): bool
    {
        return $user->hasPermissionTo('update-rekening-provider');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, RekeningProvider $rekening_provider): bool
    {
        return $user->hasPermissionTo('delete-rekening-provider');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, RekeningProvider $rekening_provider): bool
    {
        return $user->hasPermissionTo('restore-rekening-provider');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, RekeningProvider $rekening_provider): bool
    {
        return $user->hasPermissionTo('force-delete-rekening-provider');
    }

    /**
     * Determine whether the user can permanently getData the model.
     */
    public function getData(User $user, RekeningProvider $rekening_provider): bool
    {
        return $user->hasPermissionTo('data-rekening-provider');
    }
}
