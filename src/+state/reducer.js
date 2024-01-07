import * as actions from "./actionTypes";
import { Types } from "../components/movieTypes/data";

const initialState = {
  moviesType: Types[0].name,
  selectedMovie: {},
  error: { show: false, message: "" },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.TYPE_CHANGED:
      return { ...state, moviesType: payload.moviesType };

    case actions.SELECTED_MOVIE_CHANGED:
      return { ...state, selectedMovie: payload.selectedMovie };

    case actions.SERVER_ERROR:
      return { ...state, error: payload.error };

    default:
      return state;
  }
};

export default reducer;
