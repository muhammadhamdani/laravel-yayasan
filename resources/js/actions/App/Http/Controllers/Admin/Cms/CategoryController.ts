import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
 */
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/admin/cms/categories/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
 */
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
 */
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
 */
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
 */
    const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
 */
        getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::getData
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:163
 * @route '/admin/cms/categories/data'
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
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/cms/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::index
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:21
 * @route '/admin/cms/categories'
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
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/cms/categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::create
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:33
 * @route '/admin/cms/categories/create'
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
* @see \App\Http\Controllers\Admin\Cms\CategoryController::store
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:49
 * @route '/admin/cms/categories'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/cms/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::store
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:49
 * @route '/admin/cms/categories'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::store
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:49
 * @route '/admin/cms/categories'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::store
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:49
 * @route '/admin/cms/categories'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::store
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:49
 * @route '/admin/cms/categories'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
export const show = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/cms/categories/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
show.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: typeof args.category === 'object'
                ? args.category.id
                : args.category,
                }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
show.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
show.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
    const showForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
        showForm.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::show
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:82
 * @route '/admin/cms/categories/{category}'
 */
        showForm.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
export const edit = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/cms/categories/{category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
edit.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: typeof args.category === 'object'
                ? args.category.id
                : args.category,
                }

    return edit.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
edit.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
edit.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
    const editForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
        editForm.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::edit
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:98
 * @route '/admin/cms/categories/{category}/edit'
 */
        editForm.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
export const update = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/cms/categories/{category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
update.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: typeof args.category === 'object'
                ? args.category.id
                : args.category,
                }

    return update.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
update.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
update.patch = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
    const updateForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
        updateForm.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::update
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:117
 * @route '/admin/cms/categories/{category}'
 */
        updateForm.patch = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\CategoryController::destroy
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:154
 * @route '/admin/cms/categories/{category}'
 */
export const destroy = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/cms/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::destroy
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:154
 * @route '/admin/cms/categories/{category}'
 */
destroy.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: typeof args.category === 'object'
                ? args.category.id
                : args.category,
                }

    return destroy.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::destroy
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:154
 * @route '/admin/cms/categories/{category}'
 */
destroy.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::destroy
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:154
 * @route '/admin/cms/categories/{category}'
 */
    const destroyForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\CategoryController::destroy
 * @see app/Http/Controllers/Admin/Cms/CategoryController.php:154
 * @route '/admin/cms/categories/{category}'
 */
        destroyForm.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CategoryController = { getData, index, create, store, show, edit, update, destroy }

export default CategoryController