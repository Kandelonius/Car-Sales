//👉 Set up "empty" reducer and initial state
//👉 write the reducer logic for the actions
import { ADD_ACTION } from "../components/actions/optionsActions";
export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const optionsReducer = (state = initialState, action) => {
    // console.log("action", action);
    switch (action.type) {
        case ADD_ACTION:
            console.log("in red", action.payload);
            return {
                ...state,
                aditionalPrice: state.additionalPrice + action.payload.price,
                features: [...state.car.features, action.payload]
            };
        default:
            return state;
    }
};
