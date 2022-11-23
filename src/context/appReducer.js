import { USER_DATA, THEME_MODE } from "./actions";

export const initialState = {
  userData: "",
  themeMode: "light",
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.value };

    case THEME_MODE:
      return { ...state, themeMode: action.value };

    default:
      return {
        ...state,
      };
  }
};
