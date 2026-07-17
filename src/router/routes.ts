import type { RouteRecordRaw } from 'vue-router'

import { RouteName } from '@router/route-names'


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Root,
    component: () => import('@/pages/RootPage.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/pages/Menu.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/pages/History.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('@/pages/Support.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/email-support',
    name: 'EmailSupport',
    component: () => import('@/pages/EmailSupport.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/pages/Faq.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/no-flight',
    name: 'NoFlight',
    component: () => import('@/pages/NoFlight.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('@/pages/Success.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/failed',
    name: 'Failed',
    component: () => import('@/pages/Failed.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/flight-list',
    name: 'FlightList',
    component: () => import('@/pages/FlightList.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/flight-details',
    name: 'FlightDetails',
    component: () => import('@/pages/FlightDetails.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/traveller-details',
    name: 'TravellerDetails',
    component: () => import('@/pages/TravellerDetails.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/pages/Payment.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/active-flight',
    name: 'ActiveFlight',
    component: () => import('@/pages/ActiveFlight.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/pending-flight',
    name: 'PendingFlight',
    component: () => import('@/pages/PendingFlight.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
  {
    path: '/flight-summary',
    name: 'FlightSummary',
    component: () => import('@/pages/FlightSummary.vue'),
    meta: {
      title: 'AirTicket App',
    },
  },
]
