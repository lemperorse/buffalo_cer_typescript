

// @ts-ignore
const getView = function(page:any){
    return () => import(`@/views/root/${page}.vue`)
}


const rootRouter = [
    {
        path: '',
        name: 'admin-home',
        component: getView('Home')
    },
    {
        path: '/test/',
        name: 'test',
        component: getView('Test')
    },{
        path: '/register/',
        name: 'register',
        component: getView('Register')
    },
    {
        path: '/re-password/',
        name: 'forgotpassword',
        component: getView('Forgotpassword')
    },
    {
        path: '/re-password-admin/',
        name: 'forgot-password-for-admin',
        component: getView('Forgotpassword_for_admin')
    },
    {
        path: '/re-password-onyourown/',
        name: 'forgot-password-for-onyourown',
        component: getView('Forgotpassword_for_onyourown')
    },
]


export  {
    rootRouter
}