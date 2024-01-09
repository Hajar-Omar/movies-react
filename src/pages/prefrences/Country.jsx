import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import apiService from "../../services/apiService";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import store from "../../+state/store";
import { userChanged } from "../../+state/actions";

const Country = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(true);

  // selectors
  const currentCountry = useSelector((state) => state.user.country);

  useEffect(() => {
    setSelectedItem(currentCountry);
    loadData();
  }, [currentCountry]);

  useEffect(() => {
    setFilterdCountries(
      countries.filter((e) =>
        e.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value, countries]);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await apiService(`countries/countries`);
      setLoading(false);
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
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <label htmlFor="country" className="mb-3">
            Select your country
          </label>
          <Dropdown>
            <Dropdown.Toggle id="country" className="btn btn-dark w-100">
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
                      store.dispatch(userChanged({ country: item }));
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

          {selectedItem.name && (
            <>
              <h5>Facts about {<CountryItem item={selectedItem} />}:</h5>
              <table className="table table-striped table-hover mb-0">
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
        </>
      )}
    </>
  );
};

export default Country;
