import * as React from 'react';

import { List as FallbackList } from 'sales';

import FallbackHandler from '../../../components/FallbackHandler';

const ListSales = React.lazy(() => import('mf-sales/list'));

export const List = () => {
  return (
    <FallbackHandler fallback={<FallbackList />}>
      <ListSales />
    </FallbackHandler>
  );
};
