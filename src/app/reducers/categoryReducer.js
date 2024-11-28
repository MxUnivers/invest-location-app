import { FETCH_CATEGORYS_FAILURE, FETCH_CATEGORYS_REQUEST, FETCH_CATEGORYS_SUCCESS, FETCH_CATEGORYS_SUCCESS_2, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from "../actions/actions";



// categoryReducer.js
const initialState = {
    categorys: [],
    categorys2: [],
    category: {},
    categorySelect: {},
    loadingCategory:false,
    loadingCategorySelect:false,
    loadingCategorys:false,
    errorCategorys:null,
    errorCategory:null
    // ... autres états spécifiques à categoryReducer
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORY_REQUEST:
        // Dispatch une action pour définir loading sur true dans le globalReducer
        return {
          ...state,
          loadingCategory:true,
          errorCategorys:""
          // Autres manipulations d'état pour la demande de récupération des categorys
        };
        case FETCH_CATEGORY_SUCCESS:
        return {
          ...state,
          loadingCategory:false,
          errorCategorys:"",
          category:action.payload
        };
        case FETCH_CATEGORY_FAILURE:
        return {
          ...state,
          loadingCategory:false,
          errorCategorys:action.payload
        };


      case FETCH_CATEGORYS_REQUEST:
        return {
          ...state,
          loadingCategorys:true,
          errorCategorys:""
        };
       
      case FETCH_CATEGORYS_SUCCESS:
        return {
          ...state,
          categorys: action.payload,
          loadingCategorys:false,
          errorCategorys:""
          // Autres manipulations d'état pour le succès de la récupération des categorys
        };
        case FETCH_CATEGORYS_SUCCESS_2:
        return {
          ...state,
          categorys2: action.payload,
          loadingCategorys:false,
          errorCategorys:""
          // Autres manipulations d'état pour le succès de la récupération des categorys
        };
        
      case FETCH_CATEGORYS_FAILURE:
        // Dispatch une action pour définir loading sur false dans le globalReducer et enregistrer l'erreur
        return {
          ...state,
          loadingCategorys:false,
          errorCategorys:action.payload
          // Autres manipulations d'état pour l'échec de la récupération des categorys
        };
      // ... autres cas pour d'autres actions liées aux categorys

        
      default:
        return state;
    }
  };
  
  export default categoryReducer;

  

