import { FETCH_REVIEWS_FAILURE, FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_SUCCESS_2, FETCH_REVIEW_FAILURE, FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS } from "../actions/actions";



// reviewReducer.js
const initialState = {
    reviews: [],
    reviews2: [],
    review: {},
    reviewSelect: {},
    loadingreview:false,
    loadingreviewSelect:false,
    loadingreviews:false,
    errorreviews:null,
    errorreview:null
    // ... autres états spécifiques à reviewReducer
  };
  
  const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REVIEW_REQUEST:
        // Dispatch une action pour définir loading sur true dans le globalReducer
        return {
          ...state,
          loadingreview:true,
          errorreviews:""
          // Autres manipulations d'état pour la demande de récupération des reviews
        };
        case FETCH_REVIEW_SUCCESS:
        return {
          ...state,
          loadingreview:false,
          errorreviews:"",
          review:action.payload
        };
        case FETCH_REVIEW_FAILURE:
        return {
          ...state,
          loadingreview:false,
          errorreviews:action.payload
        };


      case FETCH_REVIEWS_REQUEST:
        return {
          ...state,
          loadingreviews:true,
          errorreviews:""
        };
       
      case FETCH_REVIEWS_SUCCESS:
        return {
          ...state,
          reviews: action.payload,
          loadingreviews:false,
          errorreviews:""
          // Autres manipulations d'état pour le succès de la récupération des reviews
        };
        case FETCH_REVIEWS_SUCCESS_2:
        return {
          ...state,
          reviews2: action.payload,
          loadingreviews:false,
          errorreviews:""
          // Autres manipulations d'état pour le succès de la récupération des reviews
        };
        
      case FETCH_REVIEWS_FAILURE:
        // Dispatch une action pour définir loading sur false dans le globalReducer et enregistrer l'erreur
        return {
          ...state,
          loadingreviews:false,
          errorreviews:action.payload
          // Autres manipulations d'état pour l'échec de la récupération des reviews
        };
      // ... autres cas pour d'autres actions liées aux reviews

        
      default:
        return state;
    }
  };
  
  export default reviewReducer;

  

