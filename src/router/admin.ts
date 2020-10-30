

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
]

export   {
    adminRouter
}