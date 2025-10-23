import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
 */
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/admin/cms/tags/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
 */
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
 */
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
 */
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
 */
    const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
 */
        getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::getData
 * @see app/Http/Controllers/Admin/Cms/TagController.php:146
 * @route '/admin/cms/tags/data'
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
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/cms/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::index
 * @see app/Http/Controllers/Admin/Cms/TagController.php:21
 * @route '/admin/cms/tags'
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
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/cms/tags/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::create
 * @see app/Http/Controllers/Admin/Cms/TagController.php:33
 * @route '/admin/cms/tags/create'
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
* @see \App\Http\Controllers\Admin\Cms\TagController::store
 * @see app/Http/Controllers/Admin/Cms/TagController.php:45
 * @route '/admin/cms/tags'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/cms/tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::store
 * @see app/Http/Controllers/Admin/Cms/TagController.php:45
 * @route '/admin/cms/tags'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::store
 * @see app/Http/Controllers/Admin/Cms/TagController.php:45
 * @route '/admin/cms/tags'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::store
 * @see app/Http/Controllers/Admin/Cms/TagController.php:45
 * @route '/admin/cms/tags'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::store
 * @see app/Http/Controllers/Admin/Cms/TagController.php:45
 * @route '/admin/cms/tags'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
export const show = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/cms/tags/{tag}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
show.url = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tag: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tag: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tag: typeof args.tag === 'object'
                ? args.tag.id
                : args.tag,
                }

    return show.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
show.get = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
show.head = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
    const showForm = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
        showForm.get = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::show
 * @see app/Http/Controllers/Admin/Cms/TagController.php:73
 * @route '/admin/cms/tags/{tag}'
 */
        showForm.head = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
export const edit = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/cms/tags/{tag}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
edit.url = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tag: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tag: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tag: typeof args.tag === 'object'
                ? args.tag.id
                : args.tag,
                }

    return edit.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
edit.get = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
edit.head = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
    const editForm = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
        editForm.get = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::edit
 * @see app/Http/Controllers/Admin/Cms/TagController.php:89
 * @route '/admin/cms/tags/{tag}/edit'
 */
        editForm.head = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
export const update = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/cms/tags/{tag}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
update.url = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tag: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tag: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tag: typeof args.tag === 'object'
                ? args.tag.id
                : args.tag,
                }

    return update.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
update.put = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
update.patch = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
    const updateForm = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
        updateForm.put = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::update
 * @see app/Http/Controllers/Admin/Cms/TagController.php:105
 * @route '/admin/cms/tags/{tag}'
 */
        updateForm.patch = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\Cms\TagController::destroy
 * @see app/Http/Controllers/Admin/Cms/TagController.php:137
 * @route '/admin/cms/tags/{tag}'
 */
export const destroy = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/cms/tags/{tag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::destroy
 * @see app/Http/Controllers/Admin/Cms/TagController.php:137
 * @route '/admin/cms/tags/{tag}'
 */
destroy.url = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tag: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tag: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tag: typeof args.tag === 'object'
                ? args.tag.id
                : args.tag,
                }

    return destroy.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Cms\TagController::destroy
 * @see app/Http/Controllers/Admin/Cms/TagController.php:137
 * @route '/admin/cms/tags/{tag}'
 */
destroy.delete = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\Cms\TagController::destroy
 * @see app/Http/Controllers/Admin/Cms/TagController.php:137
 * @route '/admin/cms/tags/{tag}'
 */
    const destroyForm = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Cms\TagController::destroy
 * @see app/Http/Controllers/Admin/Cms/TagController.php:137
 * @route '/admin/cms/tags/{tag}'
 */
        destroyForm.delete = (args: { tag: number | { id: number } } | [tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const TagController = { getData, index, create, store, show, edit, update, destroy }

export default TagController