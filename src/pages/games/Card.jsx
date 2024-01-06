import React from "react";

function Card({ game }) {
  return (
    <div className="d-flex col-12 col-md-6 col-lg-4 mb-4 px-3">
      <div className="card text-center w-100">
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <span className="badge text-bg-info">{game.genre}</span>
          <p className="card-text">Publisher: {game.publishers}</p>
        </div>

        {game.releaseDates && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(game.releaseDates).map((k, i) => (
                <tr key={i}>
                  <th scope="row">{k}</th>
                  <td>{game.releaseDates[k]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="card-footer text-body-secondary">
          Developers: {game.developers}
        </div>
      </div>
    </div>
  );
}

export default Card;
