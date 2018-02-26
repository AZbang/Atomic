import SubstancesTypes from '@/views/SubstancesTypes'
import SubstancesType from '@/views/SubstancesType'
import Substance from '@/views/Substance'
import Favorites from '@/views/Favorites'
import Learn from '@/views/Learn'
import Contest from '@/views/Contest'
import Results from '@/views/Results'

export default {
  routes: [
    {
      path: '/',
      meta: 'substances',
      component: SubstancesTypes
    },
    {
      path: '/types',
      meta: 'substances',
      component: SubstancesTypes
    },
    {
      path: '/types/:type',
      meta: 'substances',
      component: SubstancesType
    },
    {
      path: '/substance',
      meta: 'substances',
      component: Substance,
      props: route => ({label: route.query.label, formula: route.query.formula})
    },
    {
      path: '/contest',
      meta: 'learn',
      component: Contest,
      props: route => ({selects: route.query.selects, questions: route.query.questions})
    },
    {
      path: '/result',
      meta: 'learn',
      component: Results,
      props: route => ({score: route.query.score})
    },
    {
      path: '/learn',
      meta: 'learn',
      component: Learn
    },
    {
      path: '/favorites',
      meta: 'favorites',
      component: Favorites
    }
  ]
}
