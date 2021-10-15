import * as types from '../types/main';
import {AnyAction} from 'redux';

const initState = {
  weight: 0,
  height: 0,
  units: 'imperial',
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_HEIGHT:
      return {
        ...state,
        height: action.height,
      };
    case types.SET_WEIGHT:
      return {
        ...state,
        weight: action.weight,
      };
    case types.SET_UNITS:
      return {
        ...state,
        units: action.units,
      };
    default:
      return state;
  }
};
