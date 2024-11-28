import axios from "axios";
import { FETCH_REGIONS_FAILURE, FETCH_REGIONS_REQUEST, FETCH_REGIONS_SUCCESS, FETCH_REGIONS_SUCCESS_2, FETCH_REGION_FAILURE, FETCH_REGION_REQUEST, FETCH_REGION_SUCCESS } from "../../app/actions/actions";
import { routing } from "../../config/routing";
import { dureeDeVie, setWithExpiration } from "../../config/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../config/localvalue";
import { saveDataToFile } from "../DataLocal";
import { baseurl } from "../../config/baseurl";



// All insurance of plateforme
export function fetchRegionysAll() {
    return async (dispatch) => {
        dispatch({ type: FETCH_REGIONS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/regions/get_regions`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_REGIONS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_REGIONS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Regionys);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_REGIONS_FAILURE, payload: error.message });
            });
    }
}


// get insurance by id 
export function fetchRegionyById(idRegiony) {
    return async (dispatch) => {
        dispatch({ type: FETCH_REGION_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/regions/get_region/${idRegiony}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_REGION_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_REGION_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}

