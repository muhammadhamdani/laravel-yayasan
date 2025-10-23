<?php

use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Rekening Index
Breadcrumbs::for(
    'admin.fundraising.rekenings.index',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.dashboard')->push('Rekening', route('admin.fundraising.rekenings.index'))
);

// Rekening Create
Breadcrumbs::for(
    'admin.fundraising.rekenings.create',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.fundraising.rekenings.index')->push('Create', route('admin.fundraising.rekenings.create'))
);

// Rekening Show
Breadcrumbs::for(
    'admin.fundraising.rekenings.show',
    fn(BreadcrumbTrail $trail, $rekening) =>
    $trail->parent('admin.fundraising.rekenings.index')->push($rekening->name, route('admin.fundraising.rekenings.show', $rekening))
);

// Rekening Edit
Breadcrumbs::for(
    'admin.fundraising.rekenings.edit',
    fn(BreadcrumbTrail $trail, $rekening) =>
    $trail->parent('admin.fundraising.rekenings.show', $rekening)->push('Edit', route('admin.fundraising.rekenings.edit', $rekening))
);

// Rekening Data
Breadcrumbs::for(
    'admin.fundraising.rekenings.data',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.fundraising.rekenings.index')->push('Rekening Data', route('admin.fundraising.rekenings.data'))
);

// Rekening Provider Index
Breadcrumbs::for(
    'admin.fundraising.rekening-providers.index',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.dashboard')->push('Rekening Provider', route('admin.fundraising.rekening-providers.index'))
);

// Rekening Provider Create
Breadcrumbs::for(
    'admin.fundraising.rekening-providers.create',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.fundraising.rekening-providers.index')->push('Create', route('admin.fundraising.rekening-providers.create'))
);

// Rekening Provider Show
Breadcrumbs::for(
    'admin.fundraising.rekening-providers.show',
    fn(BreadcrumbTrail $trail, $rekening_provider) =>
    $trail->parent('admin.fundraising.rekening-providers.index')->push($rekening_provider->name, route('admin.fundraising.rekening-providers.show', $rekening_provider))
);

// Rekening Provider Edit
Breadcrumbs::for(
    'admin.fundraising.rekening-providers.edit',
    fn(BreadcrumbTrail $trail, $rekening_provider) =>
    $trail->parent('admin.fundraising.rekening-providers.show', $rekening_provider)->push('Edit', route('admin.fundraising.rekening-providers.edit', $rekening_provider))
);

// Rekening Provider Data
Breadcrumbs::for(
    'admin.fundraising.rekening-providers.data',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.fundraising.rekening-providers.index')->push('Rekening Provider Data', route('admin.fundraising.rekening-providers.data'))
);

// Page Index
Breadcrumbs::for(
    'admin.cms.pages.index',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.dashboard')->push('Page', route('admin.cms.pages.index'))
);

// Page Create
Breadcrumbs::for(
    'admin.cms.pages.create',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.pages.index')->push('Create', route('admin.cms.pages.create'))
);

// Page Show
Breadcrumbs::for(
    'admin.cms.pages.show',
    fn(BreadcrumbTrail $trail, $page) =>
    $trail->parent('admin.cms.pages.index')->push($page->name, route('admin.cms.pages.show', $page))
);

// Page Edit
Breadcrumbs::for(
    'admin.cms.pages.edit',
    fn(BreadcrumbTrail $trail, $page) =>
    $trail->parent('admin.cms.pages.show', $page)->push('Edit', route('admin.cms.pages.edit', $page))
);

// Page Data
Breadcrumbs::for(
    'admin.cms.pages.data',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.pages.index')->push('Page Data', route('admin.cms.pages.data'))
);

// Post Index
Breadcrumbs::for(
    'admin.cms.posts.index',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.dashboard')->push('Post', route('admin.cms.posts.index'))
);

// Post Create
Breadcrumbs::for(
    'admin.cms.posts.create',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.posts.index')->push('Create', route('admin.cms.posts.create'))
);

// Post Show
Breadcrumbs::for(
    'admin.cms.posts.show',
    fn(BreadcrumbTrail $trail, $post) =>
    $trail->parent('admin.cms.posts.index')->push($post->title, route('admin.cms.posts.show', $post))
);

// Post Edit
Breadcrumbs::for(
    'admin.cms.posts.edit',
    fn(BreadcrumbTrail $trail, $post) =>
    $trail->parent('admin.cms.posts.show', $post)->push('Edit', route('admin.cms.posts.edit', $post))
);

// Post Data
Breadcrumbs::for(
    'admin.cms.posts.data',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.posts.index')->push('Post Data', route('admin.cms.posts.data'))
);

// Tag Index
Breadcrumbs::for(
    'admin.cms.tags.index',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.dashboard')->push('Tag', route('admin.cms.tags.index'))
);

// Tag Create
Breadcrumbs::for(
    'admin.cms.tags.create',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.tags.index')->push('Create', route('admin.cms.tags.create'))
);

// Tag Show
Breadcrumbs::for(
    'admin.cms.tags.show',
    fn(BreadcrumbTrail $trail, $tag) =>
    $trail->parent('admin.cms.tags.index')->push($tag->name, route('admin.cms.tags.show', $tag))
);

// Tag Edit
Breadcrumbs::for(
    'admin.cms.tags.edit',
    fn(BreadcrumbTrail $trail, $tag) =>
    $trail->parent('admin.cms.tags.show', $tag)->push('Edit', route('admin.cms.tags.edit', $tag))
);

// Tag Data
Breadcrumbs::for(
    'admin.cms.tags.data',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.tags.index')->push('Tag Data', route('admin.cms.tags.data'))
);

// Categories Index
Breadcrumbs::for(
    'admin.cms.categories.index',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.dashboard')->push('Categories', route('admin.cms.categories.index'))
);

// Categories Create
Breadcrumbs::for(
    'admin.cms.categories.create',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.categories.index')->push('Create', route('admin.cms.categories.create'))
);

// Categories Show
Breadcrumbs::for(
    'admin.cms.categories.show',
    fn(BreadcrumbTrail $trail, $categories) =>
    $trail->parent('admin.cms.categories.index')->push($categories->name, route('admin.cms.categories.show', $categories))
);

// Categories Edit
Breadcrumbs::for(
    'admin.cms.categories.edit',
    fn(BreadcrumbTrail $trail, $categories) =>
    $trail->parent('admin.cms.categories.show', $categories)->push('Edit', route('admin.cms.categories.edit', $categories))
);

// Categories Data
Breadcrumbs::for(
    'admin.cms.categories.data',
    fn(BreadcrumbTrail $trail) =>
    $trail->parent('admin.cms.categories.index')->push('categories Data', route('admin.cms.categories.data'))
);

// Users
Breadcrumbs::for(
    'admin.core.users.index',
    fn($trail) =>
    $trail->parent('admin.dashboard')->push('Users', route('admin.core.users.index'))
);

Breadcrumbs::for(
    'admin.core.users.create',
    fn($trail) =>
    $trail->parent('admin.core.users.index')->push('Create', route('admin.core.users.create'))
);

Breadcrumbs::for(
    'admin.core.users.show',
    fn($trail, $user) =>
    $trail->parent('admin.core.users.index')->push($user->name, route('admin.core.users.show', $user))
);

Breadcrumbs::for(
    'admin.core.users.edit',
    fn($trail, $user) =>
    $trail->parent('admin.core.users.show', $user)->push('Edit', route('admin.core.users.edit', $user))
);

Breadcrumbs::for(
    'admin.core.users.data',
    fn($trail) =>
    $trail->parent('admin.core.users.index')->push('Users Data', route('admin.core.users.data'))
);

// Roles
Breadcrumbs::for(
    'admin.core.roles.index',
    fn($trail) =>
    $trail->parent('admin.dashboard')->push('Roles', route('admin.core.roles.index'))
);

Breadcrumbs::for(
    'admin.core.roles.create',
    fn($trail) =>
    $trail->parent('admin.core.roles.index')->push('Create', route('admin.core.roles.create'))
);

Breadcrumbs::for(
    'admin.core.roles.show',
    fn($trail, $permission) =>
    $trail->parent('admin.core.roles.index')->push($permission->name, route('admin.core.roles.show', $permission))
);

Breadcrumbs::for(
    'admin.core.roles.edit',
    fn($trail, $permission) =>
    $trail->parent('admin.core.roles.show', $permission)->push('Edit', route('admin.core.roles.edit', $permission))
);

Breadcrumbs::for(
    'admin.core.roles.data',
    fn($trail) =>
    $trail->parent('admin.core.roles.index')->push('Roles Data', route('admin.core.roles.data'))
);

// Permissions
Breadcrumbs::for(
    'admin.core.permissions.index',
    fn($trail) =>
    $trail->parent('admin.dashboard')->push('Permissions', route('admin.core.permissions.index'))
);

Breadcrumbs::for(
    'admin.core.permissions.create',
    fn($trail) =>
    $trail->parent('admin.core.permissions.index')->push('Create', route('admin.core.permissions.create'))
);

Breadcrumbs::for(
    'admin.core.permissions.show',
    fn($trail, $permission) =>
    $trail->parent('admin.core.permissions.index')->push($permission->name, route('admin.core.permissions.show', $permission))
);

Breadcrumbs::for(
    'admin.core.permissions.edit',
    fn($trail, $permission) =>
    $trail->parent('admin.core.permissions.show', $permission)->push('Edit', route('admin.core.permissions.edit', $permission))
);

Breadcrumbs::for(
    'admin.core.permissions.data',
    fn($trail) =>
    $trail->parent('admin.core.permissions.index')->push('Permissions Data', route('admin.core.permissions.data'))
);

// Dashboard (root)
Breadcrumbs::for('admin.', function (BreadcrumbTrail $trail) {
    $trail->push('Admin', route('admin.'));
});

// Dashboard (root)
Breadcrumbs::for('admin.dashboard', function (BreadcrumbTrail $trail) {
    $trail->push('Admin', route('admin.dashboard'));
});
