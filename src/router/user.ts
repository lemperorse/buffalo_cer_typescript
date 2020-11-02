

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
        path: 'reportbuffalo',
        name: 'reportbuffalo',
        component: getView('ReportBuffalo')
    },
]

export  {
    userRouter
}