import * as React from 'react';

import { Create as FallbackCreate } from 'product';

import FallbackHandler from '../../../components/FallbackHandler';

const CreateProduct = React.lazy(() => import('mf-product/create'));

export const Create = () => {
  return (
    <FallbackHandler fallback={<FallbackCreate />}>
      <CreateProduct />
    </FallbackHandler>
  );
};
