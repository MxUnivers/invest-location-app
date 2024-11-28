import axios from "axios";
import { FETCH_CATEGORYS_FAILURE, FETCH_CATEGORYS_REQUEST, FETCH_CATEGORYS_SUCCESS, FETCH_CATEGORYS_SUCCESS_2, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from "../../app/actions/actions";
import { ROUTES } from "../../config/routingUrl";
import { dureeDeVie, setWithExpiration } from "../../utils/storage/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../utils/storage/localvalue";
import { saveDataToFile } from "../DataLocal";
import { baseurl } from "../../config/baseurl";




// All insurance of plateforme
export function fetchCategorysAll() {
    return async (dispatch) => {
        dispatch({ type: FETCH_CATEGORYS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/categorys/get_categorys`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_CATEGORYS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_CATEGORYS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Categorys);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_CATEGORYS_FAILURE, payload: error.message });
            });
    }
}


// get insurance by id 
export function fetchCategoryById(idCategory) {
    return async (dispatch) => {
        dispatch({ type: FETCH_CATEGORY_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/categorys/get_category/${idCategory}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_CATEGORY_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}

