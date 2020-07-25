/**
 *
 * Asynchronously loads the component for ProductListContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
