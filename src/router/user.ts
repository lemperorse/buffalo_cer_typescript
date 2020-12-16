

// @ts-ignore

const getView = function(page:any){
    return () => import(`@/views/farmer/${page}.vue`)
}


const userRouter: any = [
    {
        path: '',
        name: 'name',
        component: getView('Home')
    },
    {
        path: '/user/home',
        name: 'หน้าแรก',
        icon:'em em-house_with_garden',
        show: true,
        component: getView('Home')
    },
    {
        path: '/user/search',
        name: 'ค้นหาใบพันธ์ประวัติ',
        icon:'em em-card_file_box',
        show: true,
        component: getView('Search')
    },
    {
        path: '/user/cer',
        name: 'cer',
        component: getView('Cer')
    },
    {
        path: '/user/profile',
        name: 'ข้อมูลส่วนตัวของฉัน',
        icon:'em em-male-farmer',
        show: true,
        component: getView('Profile')
    },
    {
        path: '/user/buffalo',
        name: 'ควายของฉัน',
        icon:'em em-water_buffalo',
        show: true,
        component: getView('Buffalo')
    },
    {
        path: 'buffalo/profile',
        name: 'buffalo-profile',
        component: getView('BuffaloProfile')
    },
    {
        path: 'buffalo/public',
        name: 'buffalo-public',
        component: getView('BuffaloPublic')
    },
    {
        path: 'buffalo/create',
        name: 'addbuffaloage',
        component: getView('AddBuffalo')
    },
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