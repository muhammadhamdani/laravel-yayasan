import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadfiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
export const uploadfiles = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadfiles.url(options),
    method: 'post',
})

uploadfiles.definition = {
    methods: ["post"],
    url: '/settings/upload-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadfiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
uploadfiles.url = (options?: RouteQueryOptions) => {
    return uploadfiles.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadfiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
uploadfiles.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadfiles.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadfiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
    const uploadfilesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadfiles.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadfiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
        uploadfilesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadfiles.url(options),
            method: 'post',
        })
    
    uploadfiles.form = uploadfilesForm
/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deletefiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
export const deletefiles = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deletefiles.url(options),
    method: 'post',
})

deletefiles.definition = {
    methods: ["post"],
    url: '/settings/delete-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deletefiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
deletefiles.url = (options?: RouteQueryOptions) => {
    return deletefiles.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deletefiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
deletefiles.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deletefiles.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deletefiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
    const deletefilesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deletefiles.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deletefiles
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
        deletefilesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deletefiles.url(options),
            method: 'post',
        })
    
    deletefiles.form = deletefilesForm
const settings = {
    uploadfiles: Object.assign(uploadfiles, uploadfiles),
deletefiles: Object.assign(deletefiles, deletefiles),
}

export default settings