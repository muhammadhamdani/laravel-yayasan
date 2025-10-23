<?php

namespace App\Policies\Fundraising;

use App\Models\Fundraising\Rekening;
use App\Models\Core\User;
use Illuminate\Auth\Access\Response;

class RekeningPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-rekening');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Rekening $rekening): bool
    {
        return $user->hasPermissionTo('view-rekening');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-rekening');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Rekening $rekening): bool
    {
        return $user->hasPermissionTo('update-rekening');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Rekening $rekening): bool
    {
        return $user->hasPermissionTo('delete-rekening');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Rekening $rekening): bool
    {
        return $user->hasPermissionTo('restore-rekening');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Rekening $rekening): bool
    {
        return $user->hasPermissionTo('force-delete-rekening');
    }

    /**
     * Determine whether the user can permanently getData the model.
     */
    public function getData(User $user, Rekening $rekening): bool
    {
        return $user->hasPermissionTo('data-rekening');
    }
}
