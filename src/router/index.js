import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DemoPage from '../components/demoPage'
import NewDemo from '../components/newDemo'
import LeftNav from '../components/left/leftNav'
import TopNav from '../components/top/topNav'
import Main from '../components/main'
import Keyword  from '../components/personal_keywords'
import Relationship from '../components/relationship'
import Category from '../components/categories'
import Topic from '../components/topics'
import Doc from '../components/docs'
import MainView from '../views/main'
import KeywordView from '../views/keyword'
import RelationshipView  from '../views/relationship'
import CategoryView from '../views/categories'
import TopicView from '../views/topics'
import DocView from '../views/docs'

Vue.use(VueRouter)

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
    path: '/relationship',
    name: 'relationshipView',
    component: RelationshipView,
    children: [{
      path: '',
      components: {
        topNav: TopNav,
        leftNav: LeftNav,
        main: Relationship
      }
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
