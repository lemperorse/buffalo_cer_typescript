

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
        path: 'home',
        name: 'homes',
        component: getView('Home')
    },
    {
        path: 'search',
        name: 'search',
        component: getView('Search')
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


    /***************************BUFFALO***********************************/
    {
        path: 'buffalo',
        name: 'buffalo-admin',
        component: getView('Buffalo')
    },
    {
        path: 'buffalo/profile',
        name: 'buffalo-profile',
        component: getView('BuffaloProfile')
    },
    {
        path: 'buffalo/create',
        name: 'add-buffalo',
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