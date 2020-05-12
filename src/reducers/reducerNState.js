export const initialState = {
    car: '',
    engine: false,
    racing: false,
    sound: false,
    spoiler: false,
    price: ''
  };
  
  export const titleReducer = (state = initialState, action) => {
    return {
        ...state
    }
  };
  