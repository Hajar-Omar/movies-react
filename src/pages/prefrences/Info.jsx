import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import * as formik from "formik";
import * as yup from "yup";
import store from "../../+state/store";

const Info = () => {
  const { Formik } = formik;
  const [photo, setPhoto] = useState();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    bio: yup.string().required(),
    pic: yup.string().required(),
    color: yup.string().required(),
    gender: yup.string().required(),
  });

  const onChange = (e) => {
    if (e.target.name === "photo") {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setPhoto(reader.result);
      };
    }
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          firstName: "Hajar",
          lastName: "Omar",
          email: "hajaromar280@gmail.com",
          bio: "",
          photo: "",
          color: "#00fffb",
          gender: "female",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="row mx-0">
              <div className="col-12 col-lg-6 mb-4">
                <FloatingLabel label="First name">
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    value={values.firstName}
                    onInput={onChange}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                </FloatingLabel>
              </div>
              <div className="col-12 col-lg-6">
                <FloatingLabel label="Last name">
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="last name"
                    value={values.lastName}
                    onInput={onChange}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />
                </FloatingLabel>
              </div>

              <div className="col-12 mb-4">
                <FloatingLabel label="Email address">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={values.email}
                    onInput={onChange}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                </FloatingLabel>
              </div>

              <div className="col-12 col-lg-6 mb-4">
                <Form.Group>
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    name="bio"
                    as="textarea"
                    rows={2}
                    value={values.bio}
                    onInput={onChange}
                    onChange={handleChange}
                    isValid={touched.bio && !errors.bio}
                  />
                </Form.Group>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  id="male"
                  onInput={onChange}
                  onChange={handleChange}
                  value="male"
                  checked={values.gender === "male"}
                  isValid={touched.gender && !errors.gender}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  id="female"
                  onInput={onChange}
                  onChange={handleChange}
                  value="female"
                  checked={values.gender === "female"}
                  isValid={touched.gender && !errors.gender}
                />
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <Form.Group>
                  <Form.Label>Set your profile photo</Form.Label>
                  <Form.Control
                    name="photo"
                    type="file"
                    value={values.pic}
                    onInput={onChange}
                    onChange={handleChange}
                    isValid={touched.pic && !errors.pic}
                  />
                </Form.Group>
                <img
                  src={
                    photo ??
                    "https://placehold.co/400/grey/white?font=lato&text=photo"
                  }
                  className="img-top"
                  width="80"
                  alt="..."
                />
              </div>

              <div className="col-12 col-lg-6 mb-4">
                <Form.Label htmlFor="color">Set your favorite Color</Form.Label>
                <Form.Control
                  type="color"
                  id="color"
                  name="color"
                  title="Choose your color"
                  value={values.color}
                  onInput={onChange}
                  onChange={handleChange}
                  isValid={touched.color && !errors.color}
                />
              </div>
            </div>
            <Button type="submit" className="btn btn-success">
              Save Profile
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Info;
