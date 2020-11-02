

// @ts-ignore
const getView = function(page:any){
    return () => import(`@/views/admin/${page}.vue`)
}


const adminRouter = [
    {
        path: '',
        name: 'home',
        component: getView('Home')
    },
    {
        path: 'profile',
        name: 'profile',
        component: getView('Profile')
    },
    {
        path: 'admin',
        name: 'admin',
        component: getView('Admin')
    },
    {
        path: 'adminprofileother',
        name: 'adminprofileother',
        component: getView('ProfileAdminOther')
    },
    {
        path: 'addadmin',
        name: 'addadmin',
        component: getView('AddAdmin')
    },
    {
        path: 'farmer',
        name: 'farmer',
        component: getView('Farmer')
    },
    {
        path: 'farmerprofile',
        name: 'farmerprofile',
        component: getView('FarmerProfile')
    },
    {
        path: 'addfarmer',
        name: 'addfarmer',
        component: getView('AddFarmer')
    },
    {
        path: 'buffalo',
        name: 'buffalo',
        component: getView('Buffalo')
    },
    {
        path: 'buffaloprofile',
        name: 'buffaloprofile',
        component: getView('BuffaloProfile')
    },
    {
        path: 'addbuffalo',
        name: 'addbuffalo',
        component: getView('AddBuffalo')
    },
    {
        path: 'addbuffaloage',
        name: 'addbuffaloage',
        component: getView('AddBuffaloAge')
    },
    {
        path: 'passwordreq',
        name: 'passwordreq',
        component: getView('PasswordRequest')
    },
    {
        path: 'reportbuffalo',
        name: 'reportbuffalo',
        component: getView('ReportBuffalo')
    },
    {
        path: 'reportmap',
        name: 'reportmap',
        component: getView('ReportMap')
    },
    {
        path: 'reportflow',
        name: 'reportflow',
        component: getView('ReportFlow')
    },
    {
        path: 'reportexport',
        name: 'reportexport',
        component: getView('ReportExport')
    },
]

export   {
    adminRouter
}