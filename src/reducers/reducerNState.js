//👉 Set up "empty" reducer and initial state
//👉 write the reducer logic for the actions
export const initialState = {
    car: '',
    engine: false,
    racing: false,
    sound: false,
    spoiler: false,
    price: ''
};

export const optionsReducer = (state = initialState, action) => {

    return {
        ...state
    }
};
