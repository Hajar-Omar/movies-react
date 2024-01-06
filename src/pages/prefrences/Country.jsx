import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import apiService from "../../services/apiService";

const Country = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setFilterdCountries(
      countries.filter((e) =>
        e.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  const loadData = async () => {
    try {
      const data = await apiService(`countries/countries`);
      setCountries(data);
      setFilterdCountries(data);
    } catch {}
  };
  // Selected Country
  const CountryItem = ({ item }) => (
    <>
      <img src={item.media.flag ?? item.media.emblem} width="20" alt="" />
      <span className="ms-2">
        {item.name} - {item.abbreviation}
      </span>
    </>
  );

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-light w-100">
                {selectedItem.name ? (
                  <CountryItem item={selectedItem} />
                ) : (
                  "Select your country"
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form.Control
                  autoFocus
                  className="my-2 w-100"
                  placeholder="Type to filter..."
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                {filterdCountries.length &&
                  filterdCountries.map((item) => (
                    <Dropdown.Item
                      key={item.id}
                      eventKey={item.id}
                      active={item.id === selectedItem.id}
                      onClick={() => {
                        setSelectedItem(item);
                        setValue("");
                      }}
                    >
                      <img
                        src={item.media.flag ?? item.media.emblem}
                        width="20"
                        alt=""
                      />
                      <span className="ms-2">
                        {item.name} - {item.abbreviation}
                      </span>
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </Card.Title>

          {selectedItem.name && (
            <>
              <h5>Facts about {<CountryItem item={selectedItem} />}:</h5>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <th scope="row">Capital</th>
                    <td>{selectedItem.capital ?? "-"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Population</th>
                    <td>{selectedItem.population ?? "-"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Currency</th>
                    <td>{selectedItem.currency ?? "-"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>{selectedItem.phone ?? "-"}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Country;
