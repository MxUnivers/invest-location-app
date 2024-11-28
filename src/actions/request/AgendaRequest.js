import axios from "axios";
import { FETCH_AGENDAS_FAILURE, FETCH_AGENDAS_REQUEST, FETCH_AGENDAS_SUCCESS, FETCH_AGENDAS_SUCCESS_2, FETCH_AGENDA_FAILURE, FETCH_AGENDA_REQUEST, FETCH_AGENDA_SUCCESS, FETCH_AGENDA_FAILURE, FETCH_AGENDA_REQUEST, FETCH_AGENDA_SUCCESS } from "../../app/actions/actions";
import { ROUTES } from "../../config/routingUrl";
import { dureeDeVie, setWithExpiration } from "../../utils/storage/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../utils/storage/localvalue";
import { baseurl } from "../../utils/url/baseurl";
import { saveDataToFile } from "../DataLocal";





// Create Agenda
export const AgendaCreate = (
    idUser, data,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDA_REQUEST });
        await axios
            .post(
                `${baseurl.url}/api/v1/agendas/`,
                data,
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                toast.success("Agenda ajouté avec succès");
                dispatch({ type: FETCH_AGENDA_SUCCESS });
                // window.location.href = `/${ROUTES.LOGIN}`;
            })
            .catch((error) => {
                toast.error("Création de cet compte impossible")
                dispatch({ type: FETCH_AGENDA_FAILURE, payload: error.message });
            });
    };
}



// update agenda 
export const AgendaUpdateById = (idAgenda,data, toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDA_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/agendas/update/${idAgenda}`,data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: FETCH_AGENDA_SUCCESS });
                dispatch(fetchAgendaById(idAgenda));
                toast.success("Disponilité de la réservation mis à jour");
            })
            .catch((error) => {
                dispatch({ type: FETCH_AGENDA_FAILURE, payload: error.message });
                toast.error("Disponibilité non mis à jour")
            });
    };
}





// update agenda 
export const AgendaDeleteById = (idAgenda,data, toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDA_REQUEST });
        await axios
            .delete(`${baseurl.url}/api/v1/agendas/delete/${idAgenda}`,data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: FETCH_AGENDA_SUCCESS });
                dispatch(fetchAgendaById(idAgenda));
                toast.success("Disponilité de la réservation mis à jour");
            })
            .catch((error) => {
                dispatch({ type: FETCH_AGENDA_FAILURE, payload: error.message });
                toast.error("Disponibilité non mis à jour")
            });
    };
}











// All agenda of plateforme
export function fetchAgendasAll() {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDAS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/agendas/get_agendas`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_AGENDAS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_AGENDAS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Agendas);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_AGENDAS_FAILURE, payload: error.message });
            });
    }
}






// All agenda of plateforme of vehicle
export function fetchAgendasAllByVehicleId(idVehicle) {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDAS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/agendas/get_agendas/vehicle/${idVehicle}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_AGENDAS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_AGENDAS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Agendas);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_AGENDAS_FAILURE, payload: error.message });
            });
    }
}






// All agenda of plateforme of property
export function fetchAgendasAllByPropertyId(idProperty) {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDAS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/agendas/get_agendas/property/${idProperty}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_AGENDAS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_AGENDAS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Agendas);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_AGENDAS_FAILURE, payload: error.message });
            });
    }
}






// All agenda of plateforme of property
export function fetchAgendasAllByDateRange(startDate, endDate, startTime, endTime) {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDAS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/agendas/get_agendas/date-range${startDate?"?startDate="+startDate:""}${ endDate?"?endDate="+endDate:""}${ startTime?"?startTime="+startTime:""}${ endTime?"?endTime="+endTime:""}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_AGENDAS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_AGENDAS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Agendas);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_AGENDAS_FAILURE, payload: error.message });
            });
    }
}



// get agenda by id 
export function fetchAgendaById(idAgenda) {
    return async (dispatch) => {
        dispatch({ type: FETCH_AGENDA_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/agendas/get_agenda/${idAgenda}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_AGENDA_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_AGENDA_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}




