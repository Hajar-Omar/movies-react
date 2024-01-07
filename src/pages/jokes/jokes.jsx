import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function Jokes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const req = await fetch(`https://api.sampleapis.com/jokes/goodJokes`);
    const data = await req.json();
    setData(data);
  };

  return (
    <>
      <h1 className="my-5">Let's Laugh &#128514; &#128514;</h1>
      <div className="row d-flex mx-0">
        {data.length &&
          data.map((item, i) => (
            <div className="col-12 col-lg-6" key={i}>
              <Accordion defaultActiveKey={0} alwaysOpen={false}>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header> {item.setup} &#129300;</Accordion.Header>
                  <Accordion.Body>{item.punchline} &#128514;</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
      </div>
    </>
  );
}

export default Jokes;
