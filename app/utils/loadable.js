import React, { lazy, Suspense } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
const loadable = (
  importFunc,
  { fallback = null } = { fallback: <LoadingIndicator /> },
) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
      {/* <div>đang tải</div> */}
      {/* <LoadingIndicator/>/ */}
    </Suspense>
  );
};

export default loadable;
