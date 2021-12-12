import Vue from 'vue';
import VueRouter from 'vue-router';

// pages
const DemoList = () => import(/* webpackChunkName: "demoList" */ '@/views/DemoList.vue');
const WaveSurfer = () => import(/* webpackChunkName: "waveSurfer" */ '@/views/WaveSurfer');
const DoubleClick2Enter = () => import(/* webpackChunkName: "doubleClick2Enter" */ '@/views/DoubleClick2Enter');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DemoList',
    component: DemoList,
    meta: {
      routerName: '列表',
    },
  },
  {
    path: '/wavesurfer',
    name: 'WaveSurfer',
    component: WaveSurfer,
    meta: {
      routerName: '声波波形图',
    },
  },
  {
    path: '/doubleClick2Enter',
    name: 'DoubleClick2Enter',
    component: DoubleClick2Enter,
    meta: {
      routerName: '双击输入',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 全局导航守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
