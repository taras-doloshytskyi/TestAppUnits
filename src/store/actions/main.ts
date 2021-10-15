import * as types from '../types/main';

export const setHeight = (height: number) => ({
  type: types.SET_HEIGHT,
  height,
});

export const setWeight = (weight: number) => ({
  type: types.SET_WEIGHT,
  weight,
});

export const setUnits = (units: string) => ({
  type: types.SET_UNITS,
  units,
});
