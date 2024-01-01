import * as actions from "./actionTypes";
import { Types } from "../components/movieTypes/data";

const initialState = { moviesType: Types[0].name };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.TYPE_CHANGED:
      return { ...state, moviesType: payload.moviesType };

    default:
      return state;
  }
};

export default reducer;
