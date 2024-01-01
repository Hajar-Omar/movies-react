import * as actions from "./actionTypes";

export const typeChanged = (moviesType) => {
  return { type: actions.TYPE_CHANGED, payload: { moviesType } };
};
