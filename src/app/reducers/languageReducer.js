
import { CHANGE_LANGUAGE } from "../actions/actions";

// languageReducer.js
const initialState = {
  language: 'fr', // langue par défaut
  translations: "fr", // traduction par défaut en français
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
        translations: action.payload === 'fr' ? "fr" : "en", // Met à jour les traductions
      };
    default:
      return state;
  }
};

export default languageReducer;
