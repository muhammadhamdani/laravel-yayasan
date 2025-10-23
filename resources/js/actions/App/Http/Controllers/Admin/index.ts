import DashboardController from './DashboardController'
import Core from './Core'
import Cms from './Cms'
import Fundraising from './Fundraising'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
Core: Object.assign(Core, Core),
Cms: Object.assign(Cms, Cms),
Fundraising: Object.assign(Fundraising, Fundraising),
}

export default Admin