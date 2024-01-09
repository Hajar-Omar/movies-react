import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import store from "../../+state/store";
import { notesSaved } from "../../+state/actions";
import { useSelector } from "react-redux";

function Notes() {
  // selectors
  const currentNotes = useSelector((state) => state.notes);

  const [inputFields, setInputFields] = useState(currentNotes);

  const add = () => {
    setInputFields((cur) => [...cur, { value: "" }]);
  };

  const remove = (index) => {
    const newFields = [...inputFields];
    newFields.splice(index, 1);
    setInputFields(newFields);
  };

  const handleChange = (ev, i) => {
    const values = [...inputFields];
    values[i].value = ev.target.value;
    setInputFields(values);
  };

  return (
    <>
      <h4>My Notes</h4>
      <div className="row">
        {inputFields.length &&
          inputFields.map((ele, i) => (
            <div className="col-12 mb-4" key={i}>
              <Form.Group className="d-flex">
                <Form.Control
                  className="me-3"
                  name={`filed-${i}`}
                  type="text"
                  placeholder="take a note"
                  value={ele.value}
                  onChange={(e) => handleChange(e, i)}
                />
                {i !== inputFields.length && (
                  <Button className="btn btn-light px-3" onClick={add}>
                    +
                  </Button>
                )}
                {i !== 0 && (
                  <Button
                    className="btn btn-light px-3"
                    onClick={() => remove(i)}
                  >
                    -
                  </Button>
                )}
              </Form.Group>
            </div>
          ))}
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => store.dispatch(notesSaved(inputFields))}
            className="btn btn-success"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Notes;
