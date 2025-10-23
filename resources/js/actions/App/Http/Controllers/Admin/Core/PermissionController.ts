import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
 */
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/admin/core/permissions/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
 */
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
 */
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
 */
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
 */
    const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
 */
        getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::getData
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:158
 * @route '/admin/core/permissions/data'
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
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/core/permissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::index
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:21
 * @route '/admin/core/permissions'
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
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/core/permissions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::create
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:33
 * @route '/admin/core/permissions/create'
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
* @see \App\Http\Controllers\Admin\Core\PermissionController::store
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:49
 * @route '/admin/core/permissions'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/core/permissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::store
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:49
 * @route '/admin/core/permissions'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::store
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:49
 * @route '/admin/core/permissions'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::store
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:49
 * @route '/admin/core/permissions'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::store
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:49
 * @route '/admin/core/permissions'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
export const show = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/core/permissions/{permission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
show.url = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { permission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    permission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        permission: typeof args.permission === 'object'
                ? args.permission.id
                : args.permission,
                }

    return show.definition.url
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
show.get = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
show.head = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
    const showForm = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
        showForm.get = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::show
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:81
 * @route '/admin/core/permissions/{permission}'
 */
        showForm.head = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
export const edit = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/core/permissions/{permission}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
edit.url = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { permission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    permission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        permission: typeof args.permission === 'object'
                ? args.permission.id
                : args.permission,
                }

    return edit.definition.url
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
edit.get = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
edit.head = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
    const editForm = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
        editForm.get = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::edit
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:97
 * @route '/admin/core/permissions/{permission}/edit'
 */
        editForm.head = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
export const update = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/core/permissions/{permission}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
update.url = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { permission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    permission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        permission: typeof args.permission === 'object'
                ? args.permission.id
                : args.permission,
                }

    return update.definition.url
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
update.put = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
update.patch = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
    const updateForm = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
        updateForm.put = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::update
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:113
 * @route '/admin/core/permissions/{permission}'
 */
        updateForm.patch = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\Core\PermissionController::destroy
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:149
 * @route '/admin/core/permissions/{permission}'
 */
export const destroy = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/core/permissions/{permission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::destroy
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:149
 * @route '/admin/core/permissions/{permission}'
 */
destroy.url = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { permission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    permission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        permission: typeof args.permission === 'object'
                ? args.permission.id
                : args.permission,
                }

    return destroy.definition.url
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\PermissionController::destroy
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:149
 * @route '/admin/core/permissions/{permission}'
 */
destroy.delete = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::destroy
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:149
 * @route '/admin/core/permissions/{permission}'
 */
    const destroyForm = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\PermissionController::destroy
 * @see app/Http/Controllers/Admin/Core/PermissionController.php:149
 * @route '/admin/core/permissions/{permission}'
 */
        destroyForm.delete = (args: { permission: number | { id: number } } | [permission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const PermissionController = { getData, index, create, store, show, edit, update, destroy }

export default PermissionController