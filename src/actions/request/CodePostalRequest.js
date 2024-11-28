import axios from "axios";
import { FETCH_CODE_POSTALS_FAILURE, FETCH_CODE_POSTALS_REQUEST, FETCH_CODE_POSTALS_SUCCESS, FETCH_CODE_POSTALS_SUCCESS_2, FETCH_CODE_POSTAL_FAILURE, FETCH_CODE_POSTAL_REQUEST, FETCH_CODE_POSTAL_SUCCESS } from "../../app/actions/actions";
import { routing } from "../../config/routing";
import { dureeDeVie, setWithExpiration } from "../../config/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../config/localvalue";
import { saveDataToFile } from "../DataLocal";
import { baseurl } from "../../config/baseurl";




// All insurance of plateforme
export function fetchCodePostalsAll() {
    return async (dispatch) => {
        dispatch({ type: FETCH_CODE_POSTALS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/codepostals/get_codepostals`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_CODE_POSTALS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_CODE_POSTALS_SUCCESS_2, payload: response.data.data });
            // saveDataToFile(response.data.data, localStorageData.CodePostals);
        }).catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_CODE_POSTALS_FAILURE, payload: error.message });
            });
    }
}


// get insurance by id 
export function fetchCodePostalById(idCodePostal) {
    return async (dispatch) => {
        dispatch({ type: FETCH_CODE_POSTAL_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/codepostals/get_codepostal/${idCodePostal}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_CODE_POSTAL_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_CODE_POSTAL_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}

