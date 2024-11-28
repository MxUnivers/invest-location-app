import { FETCH_REGIONS_FAILURE, FETCH_REGIONS_REQUEST, FETCH_REGIONS_SUCCESS, FETCH_REGIONS_SUCCESS_2, FETCH_REGION_FAILURE, FETCH_REGION_REQUEST, FETCH_REGION_SUCCESS } from "../actions/actions";



// regionReducer.js
const initialState = {
    regions: [],
    regions2: [],
    region: {},
    regionSelect: {},
    loadingRegion:false,
    loadingRegionSelect:false,
    loadingRegions:false,
    errorRegions:null,
    errorRegion:null
    // ... autres états spécifiques à regionReducer
  };
  
  const regionReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REGION_REQUEST:
        // Dispatch une action pour définir loading sur true dans le globalReducer
        return {
          ...state,
          loadingRegion:true,
          errorRegions:""
          // Autres manipulations d'état pour la demande de récupération des regions
        };
        case FETCH_REGION_SUCCESS:
        return {
          ...state,
          loadingRegion:false,
          errorRegions:"",
          region:action.payload
        };
        case FETCH_REGION_FAILURE:
        return {
          ...state,
          loadingRegion:false,
          errorRegions:action.payload
        };


      case FETCH_REGIONS_REQUEST:
        return {
          ...state,
          loadingRegions:true,
          errorRegions:""
        };
       
      case FETCH_REGIONS_SUCCESS:
        return {
          ...state,
          regions: action.payload,
          loadingRegions:false,
          errorRegions:""
          // Autres manipulations d'état pour le succès de la récupération des regions
        };
        case FETCH_REGIONS_SUCCESS_2:
        return {
          ...state,
          regions2: action.payload,
          loadingRegions:false,
          errorRegions:""
          // Autres manipulations d'état pour le succès de la récupération des regions
        };
        
      case FETCH_REGIONS_FAILURE:
        // Dispatch une action pour définir loading sur false dans le globalReducer et enregistrer l'erreur
        return {
          ...state,
          loadingRegions:false,
          errorRegions:action.payload
          // Autres manipulations d'état pour l'échec de la récupération des regions
        };
      // ... autres cas pour d'autres actions liées aux regions

        
      default:
        return state;
    }
  };
  
  export default regionReducer;

  

