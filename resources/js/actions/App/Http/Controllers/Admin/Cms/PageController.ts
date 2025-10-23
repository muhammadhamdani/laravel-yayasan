import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
 */
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/admin/cms/pages/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
 */
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
 */
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
 */
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
 */
    const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
 */
        getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::getData
 * @see app/Http/Controllers/Admin/Cms/PageController.php:167
 * @route '/admin/cms/pages/data'
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
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/cms/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::index
 * @see app/Http/Controllers/Admin/Cms/PageController.php:22
 * @route '/admin/cms/pages'
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
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/cms/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::create
 * @see app/Http/Controllers/Admin/Cms/PageController.php:34
 * @route '/admin/cms/pages/create'
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
* @see \App\Http\Controllers\Admin\Cms\PageController::store
 * @see app/Http/Controllers/Admin/Cms/PageController.php:46
 * @route '/admin/cms/pages'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/cms/pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::store
 * @see app/Http/Controllers/Admin/Cms/PageController.php:46
 * @route '/admin/cms/pages'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::store
 * @see app/Http/Controllers/Admin/Cms/PageController.php:46
 * @route '/admin/cms/pages'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::store
 * @see app/Http/Controllers/Admin/Cms/PageController.php:46
 * @route '/admin/cms/pages'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::store
 * @see app/Http/Controllers/Admin/Cms/PageController.php:46
 * @route '/admin/cms/pages'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
export const show = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/cms/pages/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
show.url = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { page: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.id
                : args.page,
                }

    return show.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
show.get = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
show.head = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
    const showForm = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
        showForm.get = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::show
 * @see app/Http/Controllers/Admin/Cms/PageController.php:81
 * @route '/admin/cms/pages/{page}'
 */
        showForm.head = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
export const edit = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/cms/pages/{page}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
edit.url = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { page: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.id
                : args.page,
                }

    return edit.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
edit.get = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
edit.head = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
    const editForm = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
        editForm.get = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::edit
 * @see app/Http/Controllers/Admin/Cms/PageController.php:97
 * @route '/admin/cms/pages/{page}/edit'
 */
        editForm.head = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
export const update = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/cms/pages/{page}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
update.url = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { page: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.id
                : args.page,
                }

    return update.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
update.put = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
update.patch = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
    const updateForm = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
        updateForm.put = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::update
 * @see app/Http/Controllers/Admin/Cms/PageController.php:113
 * @route '/admin/cms/pages/{page}'
 */
        updateForm.patch = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\PageController::destroy
 * @see app/Http/Controllers/Admin/Cms/PageController.php:154
 * @route '/admin/cms/pages/{page}'
 */
export const destroy = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/cms/pages/{page}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::destroy
 * @see app/Http/Controllers/Admin/Cms/PageController.php:154
 * @route '/admin/cms/pages/{page}'
 */
destroy.url = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { page: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.id
                : args.page,
                }

    return destroy.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\PageController::destroy
 * @see app/Http/Controllers/Admin/Cms/PageController.php:154
 * @route '/admin/cms/pages/{page}'
 */
destroy.delete = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\PageController::destroy
 * @see app/Http/Controllers/Admin/Cms/PageController.php:154
 * @route '/admin/cms/pages/{page}'
 */
    const destroyForm = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\PageController::destroy
 * @see app/Http/Controllers/Admin/Cms/PageController.php:154
 * @route '/admin/cms/pages/{page}'
 */
        destroyForm.delete = (args: { page: number | { id: number } } | [page: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const PageController = { getData, index, create, store, show, edit, update, destroy }

export default PageController