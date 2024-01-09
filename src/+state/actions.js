import * as actions from "./actionTypes";

export const typeChanged = (moviesType) => {
  return { type: actions.TYPE_CHANGED, payload: { moviesType } };
};

export const selectedMovieChanged = (selectedMovie) => {
  return { type: actions.SELECTED_MOVIE_CHANGED, payload: { selectedMovie } };
};

export const serverError = (error) => {
  return { type: actions.SERVER_ERROR, payload: { error } };
};

export const userChanged = (user) => {
  return { type: actions.USER_CHANGED, payload: { user } };
};

export const notesSaved = (notes) => {
  return { type: actions.NOTES_SAVED, payload: { notes } };
};
