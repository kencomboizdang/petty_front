import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the orderDetailContainer state domain
 */

const selectOrderDetailContainerDomain = state =>
  state.orderDetailContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrderDetailContainer
 */

const makeSelectOrderDetailContainer = () =>
  createSelector(
    selectOrderDetailContainerDomain,
    substate => substate,
  );

export default makeSelectOrderDetailContainer;
export { selectOrderDetailContainerDomain };
