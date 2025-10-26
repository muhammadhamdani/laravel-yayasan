import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
const IndexController = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IndexController.url(args, options),
    method: 'get',
})

IndexController.definition = {
    methods: ["get","head"],
    url: '/log-viewer/{view?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
IndexController.url = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return IndexController.definition.url
            .replace('{view?}', parsedArgs.view?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
IndexController.get = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: IndexController.url(args, options),
    method: 'get',
})
/**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
IndexController.head = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: IndexController.url(args, options),
    method: 'head',
})

    /**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
    const IndexControllerForm = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: IndexController.url(args, options),
        method: 'get',
    })

            /**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
        IndexControllerForm.get = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: IndexController.url(args, options),
            method: 'get',
        })
            /**
* @see \Opcodes\LogViewer\Http\Controllers\IndexController::__invoke
 * @see vendor/opcodesio/log-viewer/src/Http/Controllers/IndexController.php:12
 * @route '/log-viewer/{view?}'
 */
        IndexControllerForm.head = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: IndexController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    IndexController.form = IndexControllerForm
export default IndexController