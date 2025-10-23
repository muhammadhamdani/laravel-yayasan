import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Core\RoleController::assign
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
export const assign = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(options),
    method: 'post',
})

assign.definition = {
    methods: ["post"],
    url: '/admin/core/roles/access',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::assign
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
assign.url = (options?: RouteQueryOptions) => {
    return assign.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\RoleController::assign
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
assign.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\RoleController::assign
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
    const assignForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: assign.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\RoleController::assign
 * @see app/Http/Controllers/Admin/Core/RoleController.php:0
 * @route '/admin/core/roles/access'
 */
        assignForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: assign.url(options),
            method: 'post',
        })
    
    assign.form = assignForm
const access = {
    assign: Object.assign(assign, assign),
}

export default access