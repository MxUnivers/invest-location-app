import { FETCH_PUBLICATIONS_FAILURE, FETCH_PUBLICATIONS_REQUEST, FETCH_PUBLICATIONS_SUCCESS, FETCH_PUBLICATIONS_SUCCESS_2, FETCH_PUBLICATION_FAILURE, FETCH_PUBLICATION_REQUEST, FETCH_PUBLICATION_SUCCESS } from "../actions/actions";



// publicationReducer.js
const initialState = {
    publications: [],
    publications2: [],
    publication: {},
    publicationSelect: {},
    loadingPublication:false,
    loadingPublicationSelect:false,
    loadingPublications:false,
    errorPublications:null,
    errorPublication:null
    // ... autres états spécifiques à publicationReducer
  };
  
  const publicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PUBLICATION_REQUEST:
        // Dispatch une action pour définir loading sur true dans le globalReducer
        return {
          ...state,
          loadingPublication:true,
          errorPublications:""
          // Autres manipulations d'état pour la demande de récupération des publications
        };
        case FETCH_PUBLICATION_SUCCESS:
        return {
          ...state,
          loadingPublication:false,
          errorPublications:"",
          publication:action.payload
        };
        case FETCH_PUBLICATION_FAILURE:
        return {
          ...state,
          loadingPublication:false,
          errorPublications:action.payload
        };


      case FETCH_PUBLICATIONS_REQUEST:
        return {
          ...state,
          loadingPublications:true,
          errorPublications:""
        };
       
      case FETCH_PUBLICATIONS_SUCCESS:
        return {
          ...state,
          publications: action.payload,
          loadingPublications:false,
          errorPublications:""
          // Autres manipulations d'état pour le succès de la récupération des publications
        };
        case FETCH_PUBLICATIONS_SUCCESS_2:
        return {
          ...state,
          publications2: action.payload,
          loadingPublications:false,
          errorPublications:""
          // Autres manipulations d'état pour le succès de la récupération des publications
        };
        
      case FETCH_PUBLICATIONS_FAILURE:
        // Dispatch une action pour définir loading sur false dans le globalReducer et enregistrer l'erreur
        return {
          ...state,
          loadingPublications:false,
          errorPublications:action.payload
          // Autres manipulations d'état pour l'échec de la récupération des publications
        };
      // ... autres cas pour d'autres actions liées aux publications

        
      default:
        return state;
    }
  };
  
  export default publicationReducer;

  

