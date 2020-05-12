//👉 Build action creators

export const TOGGLE_ENGINE = "TOGGLE_ENGINE";

//actions creators are just functions that create (aka returns) actions
export const toggleEngine = () => {
  return { type: TOGGLE_ENGINE };
};

export const TOGGLE_RACING = "TOGGLE_RACING";

export const toggleRacing = () => {
  return { type: TOGGLE_RACING };
};

export const TOGGLE_SOUND = "TOGGLE_SOUND";

export const toggleSound = () => {
  return { type: TOGGLE_SOUND };
};

export const TOGGLE_SPOILER = "TOGGLE_SPOILER";

export const toggleSpoiler = () => {
  return { type: TOGGLE_SPOILER };
};