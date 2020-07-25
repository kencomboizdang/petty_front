import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productListContainer state domain
 */

const selectProductListContainerDomain = state =>
  state.productListContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductListContainer
 */

const makeSelectProductListContainer = () =>
  createSelector(
    selectProductListContainerDomain,
    substate => substate,
  );

export default makeSelectProductListContainer;
export { selectProductListContainerDomain };
