import { createRouter, createWebHistory } from 'vue-router';
import MoonvieHome from '@/pages/MoonvieHome.vue';
import MoonvieMonth from '@/pages/MoonvieMonth.vue';
import MoonviePeriod from '@/pages/MoonviePeriod.vue';
import MoonvieGenre from '@/pages/MoonvieGenre.vue';
import MoonvieOTT from '@/pages/MoonvieOTT.vue';
import MoonvieComparision from '@/pages/MoonvieComparision.vue';

const routes = [
  {
    path: '/',
    name: 'MoonvieHome',
    component: MoonvieHome
  },
  {
    path: '/month',
    name: 'MoonvieMonth',
    component: MoonvieMonth
  },
  {
    path: '/period',
    name: 'MoonviePeriod',
    component: MoonviePeriod
  },
  {
    path: '/genre',
    name: 'MoonvieGenre',
    component: MoonvieGenre
  },
  {
    path: '/OTT',
    name: 'MoonvieOTT',
    component: MoonvieOTT
  },
  {
    path: '/comparision',
    name: 'MoonvieComparision',
    component: MoonvieComparision
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
