import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
import customer from '@/components/page/customer';
import organization from '@/components/page/organization';
import space from '@/components/page/space';
import member from '@/components/page/member';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/customer',
          component:customer
        },{
          path:'/organization',
          component:organization
        },{
          path:'/BasicCharts',
          component:AmCharts
        },{
          path:'/FormLayouts',
          component:FormLayouts
        },{
          path:'/BasicTables',
          component:BasicTables
        },{
          path:'/space',
          component:space
        },{
          path:'/member',
          component:member
        }
        
      ]
    }
  ]
})
