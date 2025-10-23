import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
export const hosts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hosts.url(options),
    method: 'get',
})

hosts.definition = {
    methods: ["get","head"],
    url: '/log-viewer/api/hosts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
hosts.url = (options?: RouteQueryOptions) => {
    return hosts.definition.url + queryParams(options)
}

/**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
hosts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hosts.url(options),
    method: 'get',
})
/**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
hosts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hosts.url(options),
    method: 'head',
})

    /**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
    const hostsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hosts.url(options),
        method: 'get',
    })

            /**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
        hostsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hosts.url(options),
            method: 'get',
        })
            /**
* @see \Opcodes\LogViewer\Http\Controllers\HostsController::hosts
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/HostsController.php:10
 * @route '/log-viewer/api/hosts'
 */
        hostsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hosts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hosts.form = hostsForm
/**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
export const folders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: folders.url(options),
    method: 'get',
})

folders.definition = {
    methods: ["get","head"],
    url: '/log-viewer/api/folders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
folders.url = (options?: RouteQueryOptions) => {
    return folders.definition.url + queryParams(options)
}

/**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
folders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: folders.url(options),
    method: 'get',
})
/**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
folders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: folders.url(options),
    method: 'head',
})

    /**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
    const foldersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: folders.url(options),
        method: 'get',
    })

            /**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
        foldersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: folders.url(options),
            method: 'get',
        })
            /**
* @see \Opcodes\LogViewer\Http\Controllers\FoldersController::folders
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FoldersController.php:16
 * @route '/log-viewer/api/folders'
 */
        foldersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: folders.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    folders.form = foldersForm
/**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
export const files = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: files.url(options),
    method: 'get',
})

files.definition = {
    methods: ["get","head"],
    url: '/log-viewer/api/files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
files.url = (options?: RouteQueryOptions) => {
    return files.definition.url + queryParams(options)
}

/**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
files.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: files.url(options),
    method: 'get',
})
/**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
files.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: files.url(options),
    method: 'head',
})

    /**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
    const filesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: files.url(options),
        method: 'get',
    })

            /**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
        filesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: files.url(options),
            method: 'get',
        })
            /**
* @see \Opcodes\LogViewer\Http\Controllers\FilesController::files
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/FilesController.php:13
 * @route '/log-viewer/api/files'
 */
        filesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: files.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    files.form = filesForm
/**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
export const logs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

logs.definition = {
    methods: ["get","head"],
    url: '/log-viewer/api/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
logs.url = (options?: RouteQueryOptions) => {
    return logs.definition.url + queryParams(options)
}

/**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
logs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})
/**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
logs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logs.url(options),
    method: 'head',
})

    /**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
    const logsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: logs.url(options),
        method: 'get',
    })

            /**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
        logsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logs.url(options),
            method: 'get',
        })
            /**
* @see \Opcodes\LogViewer\Http\Controllers\LogsController::logs
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/LogsController.php:19
 * @route '/log-viewer/api/logs'
 */
        logsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    logs.form = logsForm
/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
export const index = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/log-viewer/{view?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
index.url = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { view: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    view: args[0],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "view",
        ])

    const parsedArgs = {
                        view: args?.view,
                }

    return index.definition.url
            .replace('{view?}', parsedArgs.view?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
index.get = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
index.head = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
    const indexForm = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
        indexForm.get = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:11
 * @route '/log-viewer/{view?}'
 */
        indexForm.head = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm