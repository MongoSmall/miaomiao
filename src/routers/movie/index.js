export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    //二级路由
    children:[
        {
            path:'city',//加上/是绝对路径，二级路由不加，直接就会拼接到以及路由的后面
            component:() => import('@/components/City')
        
        },
        {
            path:'nowplaying',
            component:() => import('@/components/NowPlaying')
        },
        {
            path:'comingsoon',
            component:() => import('@/components/ComingSoon')
        },
        {
            path:'search',
            component:() => import('@/components/Search')
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying',
        }
    ]
}