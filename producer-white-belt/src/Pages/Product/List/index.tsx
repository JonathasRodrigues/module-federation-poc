import * as React from 'react';

import { List as FallbackList } from 'product';

import FallbackHandler from '../../../components/FallbackHandler';

const ListProducts = React.lazy(() => import('mf-product/list'));

export const List = () => {
  return (
    <FallbackHandler fallback={<FallbackList />}>
      <ListProducts />
    </FallbackHandler>
  );
};
