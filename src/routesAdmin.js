import React from 'react';
import Loadable from 'react-loadable';

import AdminLayout from './containers/AdminLayout';


function Loading() {
  return <div>Loading...</div>;
}

const Regulations = Loadable({
  loader: () => import('./views/Regulations'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/', exact: true, name: 'Home', component: AdminLayout,
  },
  {
    path: '/admin', exact: true, name: 'Admin', component: Regulations,
  },
  { path: '/admin/regulations', name: 'Regulations', component: Regulations },
  {
    path: '/admin/users', exact: true, name: 'Users', component: Users,
  },
  {
    path: '/admin/users/:id', exact: true, name: 'User Details', component: User,
  },

];

export default routes;
