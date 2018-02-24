import SubstancesTypes from '@/views/SubstancesTypes'
import SubstancesType from '@/views/SubstancesType'
import Substance from '@/views/Substance'
import Favorites from '@/views/Favorites'
import Learn from '@/views/Learn'

export default {
  routes: [
    {
      path: '/',
      name: 'Chemicals Types',
      meta: 'substances',
      component: SubstancesTypes
    },
    {
      path: '/types',
      name: 'Substances Types',
      meta: 'substances',
      component: SubstancesTypes
    },
    {
      path: '/types/:type',
      name: 'Type Substances',
      meta: 'substances',
      component: SubstancesType
    },
    {
      path: '/substance',
      name: 'Substance',
      meta: 'substances',
      component: Substance,
      props: route => ({label: route.query.label, formula: route.query.formula})
    },
    {
      path: '/learn',
      meta: 'learn',
      name: 'Learn Substances',
      component: Learn
    },
    {
      path: '/favorites',
      meta: 'favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
}
