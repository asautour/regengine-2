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

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/', exact: true, name: 'Home', component: AdminLayout,
  },
  {
    path: '/admin', exact: true, name: 'Admin', component: Regulations,
  },
  { path: '/admin/regulations', name: 'Regulations', component: Regulations },
];

export default routes;
