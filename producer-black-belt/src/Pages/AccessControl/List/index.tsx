import * as React from 'react';

import { List as FallbackList } from 'access-control';

import FallbackHandler from '../../../components/FallbackHandler';

const ListAccessControl = React.lazy(() => import('mf-access-control/list'));

export const List = () => {
  return (
    <FallbackHandler fallback={<FallbackList />}>
      <ListAccessControl />
    </FallbackHandler>
  );
};
