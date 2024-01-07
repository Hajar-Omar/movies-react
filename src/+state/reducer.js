import * as actions from "./actionTypes";
import { Types } from "../components/movieTypes/data";

const initialState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : {
      moviesType: Types[0].name,
      selectedMovie: {},
      error: { show: false, message: "" },
      user: {
        coffee: {},
        country: {},
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        pic: "",
        color: "",
        gender: "",
      },
    };

const saveCache = (state = initialState) => {
  localStorage.setItem("state", JSON.stringify(state));
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.TYPE_CHANGED: {
      const stat = { ...state, moviesType: payload.moviesType };
      saveCache(stat);
      return stat;
    }

    case actions.SELECTED_MOVIE_CHANGED: {
      const stat = { ...state, selectedMovie: payload.selectedMovie };
      saveCache(stat);
      return stat;
    }

    case actions.SERVER_ERROR:
      return { ...state, error: payload.error };

    case actions.USER_CHANGED: {
      const stat = { ...state, user: { ...state.user, ...payload.user } };
      saveCache(stat);
      return stat;
    }

    default:
      return state;
  }
};

export default reducer;
