import axios from "axios";
import { FETCH_REVIEWS_FAILURE, FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_SUCCESS_2, FETCH_REVIEW_FAILURE, FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS } from "../../app/actions/actions";
import { routing } from "../../config/routing";
import { dureeDeVie, setWithExpiration } from "../../config/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../config/localvalue";
import { getDataFromFile, saveDataToFile } from "../DataLocal";
import { baseurl } from "../../config/baseurl";
import { toast } from "react-toastify";



// All insurance of plateforme
export function fetchReviewsAll(startDate, endDate, user, userTestimonial) {
    return async (dispatch) => {

        const params = new URLSearchParams();
        if (startDate) params.append("startDate", startDate);
        if (endDate) params.append("endDate", endDate);
        if (user) params.append("user", user);
        if (userTestimonial) params.append("userTestimonial", userTestimonial);


        const testimonials = getDataFromFile(localStorageData.Reviews) || []
        dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: testimonials });
        dispatch({ type: FETCH_REVIEWS_SUCCESS_2, payload: testimonials });
        dispatch({ type: FETCH_REVIEWS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/testimonials/get_testimonials?${params.toString()}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            // console.log(response.data.data);
            dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_REVIEWS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Reviews);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_REVIEWS_FAILURE, payload: error.message });
            });
    }
}


// get insurance by id 
export function fetchReviewById(idReview) {
    return async (dispatch) => {
        dispatch({ type: FETCH_REVIEW_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/testimonials/get_testimonial/${idReview}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_REVIEW_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_REVIEW_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}




// get insurance by id 
export function ReviewCreate(data) {
    return async (dispatch) => {
        dispatch({ type: FETCH_REVIEW_REQUEST });
        await axios.post(`${baseurl.url}/api/v1/testimonials/register`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_REVIEW_SUCCESS, payload: response.data.data });
            toast.success(response?.data?.message || "Commentaire posté", { position: "bottom-right" });
        })
            .catch((error) => {
                dispatch({ type: FETCH_REVIEW_FAILURE, payload: error.message })
                toast.error(error?.response?.data?.message || "Commentaire non posté", { position: "bottom-right" });

                //console.log(error);
            });
    }
}

