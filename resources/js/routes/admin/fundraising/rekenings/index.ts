import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
export const data = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(options),
    method: 'get',
})

data.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekenings/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
data.url = (options?: RouteQueryOptions) => {
    return data.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
data.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
data.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: data.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
    const dataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: data.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
        dataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: data.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::data
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:170
 * @route '/admin/fundraising/rekenings/data'
 */
        dataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: data.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    data.form = dataForm
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekenings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:22
 * @route '/admin/fundraising/rekenings'
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekenings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:34
 * @route '/admin/fundraising/rekenings/create'
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:50
 * @route '/admin/fundraising/rekenings'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/fundraising/rekenings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:50
 * @route '/admin/fundraising/rekenings'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:50
 * @route '/admin/fundraising/rekenings'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:50
 * @route '/admin/fundraising/rekenings'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:50
 * @route '/admin/fundraising/rekenings'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
export const show = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekenings/{rekening}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
show.url = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening: typeof args.rekening === 'object'
                ? args.rekening.id
                : args.rekening,
                }

    return show.definition.url
            .replace('{rekening}', parsedArgs.rekening.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
show.get = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
show.head = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
    const showForm = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
        showForm.get = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:86
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
        showForm.head = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
export const edit = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekenings/{rekening}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
edit.url = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening: typeof args.rekening === 'object'
                ? args.rekening.id
                : args.rekening,
                }

    return edit.definition.url
            .replace('{rekening}', parsedArgs.rekening.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
edit.get = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
edit.head = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
    const editForm = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
        editForm.get = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:102
 * @route '/admin/fundraising/rekenings/{rekening}/edit'
 */
        editForm.head = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
export const update = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/fundraising/rekenings/{rekening}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
update.url = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening: typeof args.rekening === 'object'
                ? args.rekening.id
                : args.rekening,
                }

    return update.definition.url
            .replace('{rekening}', parsedArgs.rekening.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
update.put = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
update.patch = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
    const updateForm = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
        updateForm.put = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:121
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
        updateForm.patch = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:161
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
export const destroy = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/fundraising/rekenings/{rekening}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:161
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
destroy.url = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening: typeof args.rekening === 'object'
                ? args.rekening.id
                : args.rekening,
                }

    return destroy.definition.url
            .replace('{rekening}', parsedArgs.rekening.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:161
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
destroy.delete = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:161
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
    const destroyForm = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningController.php:161
 * @route '/admin/fundraising/rekenings/{rekening}'
 */
        destroyForm.delete = (args: { rekening: number | { id: number } } | [rekening: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const rekenings = {
    data: Object.assign(data, data),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default rekenings