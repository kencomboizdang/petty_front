import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {toJS} from  'immutable';
/**
 * Direct selector to the productDetailContainer state domain
 */

const selectProductDetailContainerDomain = state =>
  state.productDetailContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductDetailContainer
 */

const makeSelectProductDetailContainer = () =>
  createSelector(
    selectProductDetailContainerDomain,
    substate => substate,
  );

export default makeSelectProductDetailContainer;
export { selectProductDetailContainerDomain };
