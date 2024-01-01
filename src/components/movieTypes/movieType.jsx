import React from "react";
import { Types } from "./data";
import store from "../../+state/store";
import { typeChanged } from "../../+state/actions";

const MovieType = () => {
  // readonly
  const types = Types;

  return (
    <>
      {types.map((t, i) => (
        <button
          className={t.name === store.getState().moviesType ? "active" : ""}
          key={i}
          onClick={() => {
            store.dispatch(typeChanged(t.name));
          }}
        >
          {t.name}
        </button>
      ))}
    </>
  );
};

export default MovieType;
