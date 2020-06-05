import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DemoPage from '../components/demoPage'
import NewDemo from '../components/newDemo'
import LeftNav from '../components/left/leftNav'
import TopNav from '../components/top/topNav'
import Main from '../components/main'
import Keyword  from '../components/personal_keywords'
import Personal_Relationship from '../components/personal_relationship'
import Enterprise_Relationship from '../components/enterprise_relationship'
import Category from '../components/categories'
import Topic from '../components/topics'
import Doc from '../components/docs'
import EmailPage from '../components/emailPage'
import MainView from '../views/main'
import KeywordView from '../views/keyword'
import Personal_RelationshipView  from '../views/personal_relationship'
import Enterprise_RelationshipView  from '../views/enterprise_relationship'
import CategoryView from '../views/categories'
import TopicView from '../views/topics'
import DocView from '../views/docs'
import EmailPageView from '../views/emailPage'

Vue.use(VueRouter);

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demoPage',
    name: 'demoPage',
    component: DemoPage
  },
  {
    path: '/newDemo',
    name: 'newDemo',
    component: NewDemo
  },
  {
    path: '/',
    name: 'mainView',
    component: MainView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Main
      }
    }]
  },
  {
    path: '/category',
    name: 'categoryView',
    component: CategoryView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Category
      }
    }]
  },
  {
    path: '/topic',
    name: 'topicView',
    component: TopicView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Topic
      }
    }]
  },
  {
    path: '/doc',
    name: 'docView',
    component: DocView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Doc
      }
    }]
  },
  {
    path: '/keyword',
    name: 'keywordView',
    component: KeywordView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Keyword
      }
    }]
  },
  {
    path: '/personal_relationship',
    name: 'personal_relationshipView',
    component: Personal_RelationshipView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Personal_Relationship
      }
    }]
  },
  {
    path: '/enterprise_relationship',
    name: 'enterprise_relationshipView',
    component: Enterprise_RelationshipView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Enterprise_Relationship
      }
    }]
  },
  {
    path: '/emailPage',
    name: 'emailPage',
    component: EmailPageView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: EmailPage
      }
    }]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
