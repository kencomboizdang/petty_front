import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import {toJS} from 'immutable';

/**
 * Direct selector to the orderProductsContainer state domain
 */

const selectOrderProductsContainerDomain = state =>
  state.orderProductsContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrderProductsContainer
 */

const makeSelectOrderProductsContainer = () =>
  createSelector(
    selectOrderProductsContainerDomain,
    substate => substate.toJS(),
  );

export default makeSelectOrderProductsContainer;
export { selectOrderProductsContainerDomain };
