import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const PartOne = () => import('../components/Part/PartOne');
const PartTwo = () => import('../components/Part/PartTwo');
const PartThree = () => import('../components/Part/PartThree');
const PartFour = () => import('../components/Part/PartFour');
const PartFive = () => import('../components/Part/PartFive');
const PartSix = () => import('../components/Part/PartSix');
const PartSeven = () => import('../components/Part/PartSeven');

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        PartOne: PartOne,
        PartTwo: PartTwo,
        PartThree: PartThree,
        PartFour: PartFour,
        PartFive: PartFive,
        PartSix: PartSix,
        PartSeven: PartSeven
      }
    },
    {
      path: '/PartOne',
      name: 'PartOne',
      component: PartOne
    },
    {
      path: '/PartTwo',
      name: 'PartTwo',
      component: PartTwo
    },
    {
      path: '/PartThree',
      name: 'PartThree',
      component: PartThree
    },
    {
      path: '/PartFour',
      name: 'PartFour',
      component: PartFour
    },
    {
      path: '/PartFive',
      name: 'PartFive',
      component: PartFive
    },
    {
      path: '/PartSix',
      name: 'PartSix',
      component: PartSix
    },
    {
      path: '/PartSeven',
      name: 'PartSeven',
      component: PartSeven
    },
  ]
})
