import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DashboardForm from '../components/DashboardForm.vue';
import TakeAssessment from '../components/TakeAssessment.vue';
import Successful from '../components/Successful.vue';
import CreateApplication from '../components/CreateApplication.vue';
import ComposeAssessment from '../components/ComposeAssessment.vue';
import ForgetPassword from '../components/ForgetPassword.vue';
import UserSignup from '../components/UserSignup.vue';
import History from '../components/AssessmentHistory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'UserSignup',
    component: UserSignup,
  },
  {
    path: '/dashboard',
    name: 'DashboardForm',
    component: DashboardForm,
  },
  {
    path: '/assessment',
    name: 'TakeAssessment',
    component: TakeAssessment,
  },
  {
    path: '/successful',
    name: 'Successful',
    component: Successful,
  },
  {
    path: '/application',
    name: 'CreateApplication',
    component: CreateApplication,
  },
  {
    path: '/compose',
    name: 'ComposeAssessment',
    component: ComposeAssessment,
  },
  {
    path: '/forget',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
