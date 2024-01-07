import React from "react";
import { useSelector } from "react-redux";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import store from "../../+state/store";
import { serverError } from "../../+state/actions";

const ErrorToast = () => {
  // selectors
  const currentServerError = useSelector((state) => state.error); // Accessing current Redux state, instead of store.getState().moviesType

  return (
    <ToastContainer className="p-5" position="top-end" style={{ zIndex: 1 }}>
      <Toast
        bg="danger"
        onClose={() => {
          store.dispatch(serverError({ show: false, message: "" }));
        }}
        show={currentServerError.show}
        delay={3000}
        autohide
      >
        {/* <Toast.Header>
        <strong className="me-auto">Watch out! Something went wrong</strong>
      </Toast.Header> */}
        <Toast.Body className="text-white">
          {currentServerError.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorToast;
