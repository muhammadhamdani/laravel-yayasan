import PermissionController from './PermissionController'
import RoleController from './RoleController'
import UserController from './UserController'
import SettingsController from './SettingsController'
const Core = {
    PermissionController: Object.assign(PermissionController, PermissionController),
RoleController: Object.assign(RoleController, RoleController),
UserController: Object.assign(UserController, UserController),
SettingsController: Object.assign(SettingsController, SettingsController),
}

export default Core