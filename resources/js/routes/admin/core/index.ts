import permissions from './permissions'
import roles from './roles'
import users from './users'
const core = {
    permissions: Object.assign(permissions, permissions),
roles: Object.assign(roles, roles),
users: Object.assign(users, users),
}

export default core