import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
export const uploadFile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadFile.url(options),
    method: 'post',
})

uploadFile.definition = {
    methods: ["post"],
    url: '/settings/upload-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
uploadFile.url = (options?: RouteQueryOptions) => {
    return uploadFile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
uploadFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadFile.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
    const uploadFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadFile.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::uploadFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:12
 * @route '/settings/upload-image'
 */
        uploadFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadFile.url(options),
            method: 'post',
        })
    
    uploadFile.form = uploadFileForm
/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deleteFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
export const deleteFile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteFile.url(options),
    method: 'post',
})

deleteFile.definition = {
    methods: ["post"],
    url: '/settings/delete-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deleteFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
deleteFile.url = (options?: RouteQueryOptions) => {
    return deleteFile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deleteFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
deleteFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteFile.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deleteFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
    const deleteFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteFile.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\Core\SettingsController::deleteFile
 * @see app/Http/Controllers/Admin/Core/SettingsController.php:21
 * @route '/settings/delete-image'
 */
        deleteFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteFile.url(options),
            method: 'post',
        })
    
    deleteFile.form = deleteFileForm
const SettingsController = { uploadFile, deleteFile }

export default SettingsController