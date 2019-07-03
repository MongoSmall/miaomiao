import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import movieRouter from './movie';
import cinemaRouter from './cinema';
import mineRouter from './mine';
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
   movieRouter,
   cinemaRouter,
   mineRouter,
   {
     path:"/*",
     redirect:'/movie',

   }
  //  可以先做一个重定向，比如我随便跳转一个，上面的页面都不符合
  //  页面找不到，此时我可以重定向到 影院首页
  ]
});
