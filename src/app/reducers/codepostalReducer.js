import { FETCH_CODE_POSTALS_FAILURE, FETCH_CODE_POSTALS_REQUEST, FETCH_CODE_POSTALS_SUCCESS, FETCH_CODE_POSTALS_SUCCESS_2, FETCH_CODE_POSTAL_FAILURE, FETCH_CODE_POSTAL_REQUEST, FETCH_CODE_POSTAL_SUCCESS } from "../actions/actions";



// codepostalReducer.js
const initialState = {
    codepostals: [],
    codepostals2: [],
    codepostal: {},
    codepostalSelect: {},
    loadingCodepostal:false,
    loadingCodepostalSelect:false,
    loadingCodepostals:false,
    errorCodepostals:null,
    errorCodepostal:null
    // ... autres états spécifiques à codepostalReducer
  };
  
  const codepostalReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CODE_POSTAL_REQUEST:
        // Dispatch une action pour définir loading sur true dans le globalReducer
        return {
          ...state,
          loadingCodepostal:true,
          errorCodepostals:""
          // Autres manipulations d'état pour la demande de récupération des codepostals
        };
        case FETCH_CODE_POSTAL_SUCCESS:
        return {
          ...state,
          loadingCodepostal:false,
          errorCodepostals:"",
          codepostal:action.payload
        };
        case FETCH_CODE_POSTAL_FAILURE:
        return {
          ...state,
          loadingCodepostal:false,
          errorCodepostals:action.payload
        };


      case FETCH_CODE_POSTALS_REQUEST:
        return {
          ...state,
          loadingCodepostals:true,
          errorCodepostals:""
        };
       
      case FETCH_CODE_POSTALS_SUCCESS:
        return {
          ...state,
          codepostals: action.payload,
          loadingCodepostals:false,
          errorCodepostals:""
          // Autres manipulations d'état pour le succès de la récupération des codepostals
        };
        case FETCH_CODE_POSTALS_SUCCESS_2:
        return {
          ...state,
          codepostals2: action.payload,
          loadingCodepostals:false,
          errorCodepostals:""
          // Autres manipulations d'état pour le succès de la récupération des codepostals
        };
        
      case FETCH_CODE_POSTALS_FAILURE:
        // Dispatch une action pour définir loading sur false dans le globalReducer et enregistrer l'erreur
        return {
          ...state,
          loadingCodepostals:false,
          errorCodepostals:action.payload
          // Autres manipulations d'état pour l'échec de la récupération des codepostals
        };
      // ... autres cas pour d'autres actions liées aux codepostals

        
      default:
        return state;
    }
  };
  
  export default codepostalReducer;
  