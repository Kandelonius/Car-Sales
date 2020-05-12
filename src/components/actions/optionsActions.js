//👉 Build action creators

//actions creators are just functions that create (aka returns) actions
export const ADD_ACTION = "ADD_ACTION";

export const addAction = feature => {
  return { type: ADD_ACTION, payload: feature};
};

// export const TOGGLE_RACING = "TOGGLE_RACING";

// export const toggleRacing = () => {
//   return { type: TOGGLE_RACING };
// };

// export const TOGGLE_SOUND = "TOGGLE_SOUND";

// export const toggleSound = () => {
//   return { type: TOGGLE_SOUND };
// };

// export const TOGGLE_SPOILER = "TOGGLE_SPOILER";

// export const toggleSpoiler = () => {
//   return { type: TOGGLE_SPOILER };
// };