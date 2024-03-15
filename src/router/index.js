import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import AboutView from '../views/AboutView.vue' */
import TemplateView from '../views/projects/DescriptionView.vue'

/* IMAGENES */
import logo from '../assets/logo.png'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Xpanzion | Inicio',
      description: '#',
      canonical: 'https://xpanzion.net/'
    }
  },
  {
    path: '/proyectos/:slug',
    name: 'proyectos',
    component: TemplateView,
    meta: {
      title: 'Xpanzion | Proyectos',
      description: '#',
      canonical: 'https://xpanzion.net/'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//SET TITLE
router.beforeEach((to, from, next) => {
  const currentURL = window.location.href

  //META TAGS DEFAULT
  let title = to.meta.title ? to.meta.title : 'Xpanzion'
  let slug = to.params.slug ? to.params.slug : ''
  document.title = `${title} ${slug}`
  document.documentElement.lang = 'es'
  document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description)
  document.querySelector('meta[name="robots"]').setAttribute('content', 'index')
  document.querySelector('meta[name="copyright"]').setAttribute('content', 'Xpanzion')

  //URL CANONICAL
  if (to.meta.canonical != '') {
    document.querySelector('link[rel="canonical"]').setAttribute('href', to.meta.canonical)
  }

  //META TAGS OF FACEBOOK
  document.querySelector('meta[property="og:url"]').setAttribute('content', currentURL)

  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', to.meta.title ? to.meta.title : 'Xpanzion')

  document.querySelector('meta[property="og:locale"]').setAttribute('content', 'es_VE')
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', 'http://' + window.location.host + logo)
  document.querySelector('meta[property="og:type"]').setAttribute('content', 'website')
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', to.meta.description)

  //META TAGS OF TWIITER
  document
    .querySelector('meta[property="twitter:card"]')
    .setAttribute('content', 'summary_large_image')

  document.querySelector('meta[property="twitter:url"]').setAttribute('content', currentURL)

  document
    .querySelector('meta[property="twitter:title"]')
    .setAttribute('content', to.meta.title ? to.meta.title : 'Plomeros 911')
  document
    .querySelector('meta[property="twitter:description"]')
    .setAttribute('content', to.meta.description)
  document
    .querySelector('meta[property="twitter:image"]')
    .setAttribute('content', 'http://' + window.location.host + logo)
  next()
})

export default router
