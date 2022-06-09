import * as React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { List as ListAccessControl } from './Pages/AccessControl/List';
import { Create } from './Pages/Product/Create';
import { List as ListProducts } from './Pages/Product/List';
import { List as ListSales } from './Pages/Sales/List';

export const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' element={<>Home</>} />
        <Route path='/product/create' element={<Create />} />
        <Route path='/product/list' element={<ListProducts />} />
        <Route path='/sales' element={<ListSales />} />
        <Route path='/access-control' element={<ListAccessControl />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
