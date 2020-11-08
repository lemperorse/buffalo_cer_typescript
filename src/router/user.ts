

// @ts-ignore

const getView = function(page:any){
    return () => import(`@/views/farmer/${page}.vue`)
}


const userRouter:any  = [
    {
        path: '',
        name: 'home',
        component: getView('Home')
    },
    {
        path: '/user/search',
        name: 'search',
        component: getView('Search')
    },
    {
        path: '/user/cer',
        name: 'cer',
        component: getView('Cer')
    },
    {
        path: '/user/profile',
        name: 'profile',
        component: getView('Profile')
    },
    {
        path: '/user/buffalo',
        name: 'buffalo',
        component: getView('Buffalo')
    },
    {
        path: 'buffalo/profile',
        name: 'buffalo-profile',
        component: getView('BuffaloProfile')
    },
    {
        path: 'buffalo/create',
        name: 'addbuffaloage',
        component: getView('AddBuffalo')
    },
    // {
    //     path: '/user/addbuffalo',
    //     name: 'addbuffalo',
    //     component: getView('AddBuffalo')
    // },
    {
        path: '/user/reportbuffalo',
        name: 'reportbuffalo',
        component: getView('ReportBuffalo')
    },
    {
        path: '/user/reportsystem',
        name: 'reportsystem',
        component: getView('ReportSystem')
    },
]

export  {
    userRouter
}