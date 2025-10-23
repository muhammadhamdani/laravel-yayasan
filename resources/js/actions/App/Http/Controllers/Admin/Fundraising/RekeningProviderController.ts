import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
 */
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekening-providers/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
 */
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
 */
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
 */
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
 */
    const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
 */
        getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::getData
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:143
 * @route '/admin/fundraising/rekening-providers/data'
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekening-providers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::index
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:20
 * @route '/admin/fundraising/rekening-providers'
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekening-providers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::create
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:32
 * @route '/admin/fundraising/rekening-providers/create'
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:44
 * @route '/admin/fundraising/rekening-providers'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/fundraising/rekening-providers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:44
 * @route '/admin/fundraising/rekening-providers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:44
 * @route '/admin/fundraising/rekening-providers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:44
 * @route '/admin/fundraising/rekening-providers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::store
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:44
 * @route '/admin/fundraising/rekening-providers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
export const show = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekening-providers/{rekening_provider}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
show.url = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening_provider: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening_provider: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening_provider: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening_provider: typeof args.rekening_provider === 'object'
                ? args.rekening_provider.id
                : args.rekening_provider,
                }

    return show.definition.url
            .replace('{rekening_provider}', parsedArgs.rekening_provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
show.get = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
show.head = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
    const showForm = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
        showForm.get = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::show
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:71
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
        showForm.head = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
export const edit = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/fundraising/rekening-providers/{rekening_provider}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
edit.url = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening_provider: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening_provider: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening_provider: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening_provider: typeof args.rekening_provider === 'object'
                ? args.rekening_provider.id
                : args.rekening_provider,
                }

    return edit.definition.url
            .replace('{rekening_provider}', parsedArgs.rekening_provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
edit.get = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
edit.head = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
    const editForm = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
        editForm.get = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::edit
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:87
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}/edit'
 */
        editForm.head = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
export const update = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/fundraising/rekening-providers/{rekening_provider}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
update.url = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening_provider: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening_provider: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening_provider: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening_provider: typeof args.rekening_provider === 'object'
                ? args.rekening_provider.id
                : args.rekening_provider,
                }

    return update.definition.url
            .replace('{rekening_provider}', parsedArgs.rekening_provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
update.put = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
update.patch = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
    const updateForm = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
        updateForm.put = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::update
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:103
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
        updateForm.patch = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:134
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
export const destroy = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/fundraising/rekening-providers/{rekening_provider}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:134
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
destroy.url = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rekening_provider: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { rekening_provider: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    rekening_provider: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        rekening_provider: typeof args.rekening_provider === 'object'
                ? args.rekening_provider.id
                : args.rekening_provider,
                }

    return destroy.definition.url
            .replace('{rekening_provider}', parsedArgs.rekening_provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:134
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
destroy.delete = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:134
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
    const destroyForm = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Fundraising\RekeningProviderController::destroy
 * @see app/Http/Controllers/Admin/Fundraising/RekeningProviderController.php:134
 * @route '/admin/fundraising/rekening-providers/{rekening_provider}'
 */
        destroyForm.delete = (args: { rekening_provider: number | { id: number } } | [rekening_provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const RekeningProviderController = { getData, index, create, store, show, edit, update, destroy }

export default RekeningProviderController