import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import About from '@/views/pages/About.vue'
import Projects from '@/views/pages/Projects.vue'
import Contact from '@/views/pages/Contact.vue'
import Blog from '@/views/pages/Blog.vue'
import BlogPost from '@/views/pages/BlogPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog-post',
      name: 'blog-post',
      component: BlogPost
    },
  ]
})

export default router
