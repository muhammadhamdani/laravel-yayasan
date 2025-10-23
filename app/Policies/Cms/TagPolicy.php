<?php

namespace App\Policies\Cms;

use App\Models\Cms\Tag;
use App\Models\Core\User;
use Illuminate\Auth\Access\Response;

class TagPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-tag');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Tag $tag): bool
    {
        return $user->hasPermissionTo('view-tag');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-tag');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Tag $tag): bool
    {
        return $user->hasPermissionTo('update-tag');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Tag $tag): bool
    {
        return $user->hasPermissionTo('delete-tag');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Tag $tag): bool
    {
        return $user->hasPermissionTo('restore-tag');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Tag $tag): bool
    {
        return $user->hasPermissionTo('force-delete-tag');
    }

    /**
     * Determine whether the user can permanently getData the model.
     */
    public function getData(User $user, Tag $tag): bool
    {
        return $user->hasPermissionTo('data-tag');
    }
}
