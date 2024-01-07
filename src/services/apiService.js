import { serverError } from "../+state/actions";
import store from "../+state/store";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiService = async (endpoint, method = "GET", body = null) => {
  const url = `${BASE_URL}/${endpoint}`;
  const headers = {
    // Add headers as needed (Content-Type, Authorization, etc.)
    "Content-Type": "application/json",
    // You can include other headers based on your requirements
  };

  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Handle errors (logging, displaying error messages, etc.)
    store.dispatch(serverError({ show: true, message: error.message }));
    console.error("Error:", error.message);
    throw error; // Rethrow the error for the caller to handle
  }
};

export default apiService;
