import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
export const manageAccessRole = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAccessRole.url(options),
    method: 'get',
})

manageAccessRole.definition = {
    methods: ["get","head"],
    url: '/admin/core/roles/access',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
manageAccessRole.url = (options?: RouteQueryOptions) => {
    return manageAccessRole.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
manageAccessRole.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAccessRole.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
manageAccessRole.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageAccessRole.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
    const manageAccessRoleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: manageAccessRole.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
        manageAccessRoleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: manageAccessRole.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::manageAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
        manageAccessRoleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: manageAccessRole.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    manageAccessRole.form = manageAccessRoleForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::assignAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
export const assignAccessRole = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignAccessRole.url(options),
    method: 'post',
})

assignAccessRole.definition = {
    methods: ["post"],
    url: '/admin/core/roles/access',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::assignAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
assignAccessRole.url = (options?: RouteQueryOptions) => {
    return assignAccessRole.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::assignAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
assignAccessRole.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignAccessRole.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::assignAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
    const assignAccessRoleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: assignAccessRole.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::assignAccessRole
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
        assignAccessRoleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: assignAccessRole.url(options),
            method: 'post',
        })
    
    assignAccessRole.form = assignAccessRoleForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/admin/core/roles/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
    const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
        getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::getData
 * @see app/Http/Controllers/Admin/Core/RoleController.php:171
 * @route '/admin/core/roles/data'
 */
        getDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getData.form = getDataForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/core/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::index
 * @see app/Http/Controllers/Admin/Core/RoleController.php:21
 * @route '/admin/core/roles'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/core/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::create
 * @see app/Http/Controllers/Admin/Core/RoleController.php:33
 * @route '/admin/core/roles/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::store
 * @see app/Http/Controllers/Admin/Core/RoleController.php:49
 * @route '/admin/core/roles'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/core/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::store
 * @see app/Http/Controllers/Admin/Core/RoleController.php:49
 * @route '/admin/core/roles'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::store
 * @see app/Http/Controllers/Admin/Core/RoleController.php:49
 * @route '/admin/core/roles'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::store
 * @see app/Http/Controllers/Admin/Core/RoleController.php:49
 * @route '/admin/core/roles'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::store
 * @see app/Http/Controllers/Admin/Core/RoleController.php:49
 * @route '/admin/core/roles'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
export const show = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/core/roles/{role}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
show.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return show.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
show.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
show.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
    const showForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
        showForm.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::show
 * @see app/Http/Controllers/Admin/Core/RoleController.php:83
 * @route '/admin/core/roles/{role}'
 */
        showForm.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
export const edit = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/core/roles/{role}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
edit.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return edit.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
edit.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
edit.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
    const editForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
        editForm.get = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::edit
 * @see app/Http/Controllers/Admin/Core/RoleController.php:99
 * @route '/admin/core/roles/{role}/edit'
 */
        editForm.head = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
export const update = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/core/roles/{role}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
update.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return update.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
update.put = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
update.patch = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
    const updateForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
        updateForm.put = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::update
 * @see app/Http/Controllers/Admin/Core/RoleController.php:118
 * @route '/admin/core/roles/{role}'
 */
        updateForm.patch = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::destroy
 * @see app/Http/Controllers/Admin/Core/RoleController.php:156
 * @route '/admin/core/roles/{role}'
 */
export const destroy = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/core/roles/{role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::destroy
 * @see app/Http/Controllers/Admin/Core/RoleController.php:156
 * @route '/admin/core/roles/{role}'
 */
destroy.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { role: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return destroy.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::destroy
 * @see app/Http/Controllers/Admin/Core/RoleController.php:156
 * @route '/admin/core/roles/{role}'
 */
destroy.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::destroy
 * @see app/Http/Controllers/Admin/Core/RoleController.php:156
 * @route '/admin/core/roles/{role}'
 */
    const destroyForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::destroy
 * @see app/Http/Controllers/Admin/Core/RoleController.php:156
 * @route '/admin/core/roles/{role}'
 */
        destroyForm.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const RoleController = { manageAccessRole, assignAccessRole, getData, index, create, store, show, edit, update, destroy }

export default RoleController