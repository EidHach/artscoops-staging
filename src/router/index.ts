import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArtistsView from '../views/ArtistsView.vue';
import ArtworksView from '../views/ArtworksView.vue';
import ShowsView from '../views/ShowsView.vue';
import OffersView from '../views/OffersView.vue';
import SearchView from '../views/SearchView.vue';
import InboxView from '../views/InboxView.vue';
import HelpView from '../views/HelpView.vue';
import SettingsView from '../views/SettingsView.vue';
import ArtistView from '../views/ArtistView.vue';
import ArtworkView from '../views/ArtworkView.vue';
import MessageView from '../views/MessageView.vue';
import ShowView from '../views/ShowView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    name: 'login',
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/artists',
    name: 'artists',
    component: ArtistsView,
  },
  {
    path: '/artists/:id',
    name: 'artist',
    component: ArtistView,
  },
  {
    path: '/artists/new',
    name: 'new-artist',
    component: ArtistView,
  },
  {
    path: '/my_info',
    name: 'my-info',
    component: ArtistView,
  },
  {
    path: '/artworks',
    name: 'artworks',
    component: ArtworksView,
  },
  {
    path: '/artworks/:id',
    name: 'artwork',
    component: ArtworkView,
  },
  {
    path: '/artworks/new',
    name: 'add-artwork',
    component: ArtworkView,
  },
  {
    path: '/artworks/:id/duplicate',
    name: 'duplicate-artwork',
    component: ArtworkView,
  },
  {
    path: '/shows',
    name: 'shows',
    component: ShowsView,
  },
  {
    path: '/shows/:id',
    name: 'exhibition',
    component: ShowView,
  },
  {
    path: '/shows/add',
    name: 'add-exhibition',
    component: ShowView,
  },
  {
    path: '/offers',
    name: 'offers',
    component: OffersView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: InboxView,
  },
  {
    path: '/inbox/:id',
    name: 'message',
    component: MessageView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
