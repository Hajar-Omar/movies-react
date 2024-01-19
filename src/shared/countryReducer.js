
// ACTIONS
const setValue = 'SET_VALUE';
const setCountries = 'SET_COUNTRIES';
const setFilterdCountries = 'SET_FILTERED_COUNTRIES';
const setSelectedItem = 'SET_SELECTED_ITEM';
const setLoading = 'SET_LOADING';

// STATE
const intialState = {
    value: "",
    countries: [],
    filterdCountries: [],
    selectedItem: {},
    loading: true
}

// COUNTRY REDUCER
const countryReducer = (state = intialState, action) => {
    switch (action.type) {
      case setValue:
        return { ...state, value: action.payload.value};
      default:
        return state;
    }
  };
