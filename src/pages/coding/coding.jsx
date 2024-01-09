import React, { useEffect, useState } from "react";
import apiService from "../../services/apiService";

function Coding() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await apiService(`codingresources/codingResources`);
    setData(data);
  };

  return (
    <>
      <h1 className="my-5">Learn How To Code</h1>
      <div className="row d-flex mx-0">
        {data.length &&
          data.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img
                    src="https://placehold.co/400/grey/white?font=lato&text=let's\ncode"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title mt-2">{item.description}</h5>
                    <p className="card-text">
                      Levels:
                      <span className="badge text-bg-success">
                        {item.levels.join(", ")}
                      </span>
                    </p>
                    <p className="card-text">
                      Topics:
                      <span className="badge text-bg-warning">
                        {item.topics.join(", ")}
                      </span>
                    </p>
                    <div className="mb-4">
                      <span className="badge text-bg-info">{item.types}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark w-50"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Coding;
