import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_SUCCESS_2, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../../app/actions/actions";
import { routing } from "../../config/routing";
import { dureeDeVie, getAndCheckLocalStorage, setWithExpiration } from "../../config/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../config/localvalue";
import { saveDataToFile } from "../DataLocal";
import { baseurl } from "../../config/baseurl";



// Create User
export const UserCreate = (
    data,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .post(
                `${baseurl.url}/api/v1/users`,
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
                toast.success("Compte créer avec succès", { position: "bottom-right" });
                dispatch({ type: FETCH_USER_SUCCESS });
                window.location.reload();
            })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
                toast.error(`${error.response.data.message}`, { position: "bottom-right" })
            });
    };
}





export const UserUpdateById = (
    idUser,
    data,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .put(
                `${baseurl.url}/api/v1/users/edit/${idUser}`,
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
                toast.success("Compte utilisateur mis ajour avec succès", { position: "bottom-right" });
                dispatch({ type: FETCH_USER_SUCCESS, payload: response.data.data });
                if(getAndCheckLocalStorage(localStorageKeys.userId)==idUser){
                setWithExpiration(localStorageKeys.userCoverPicture, response.data.data.profilePicture, dureeDeVie);
                window.location.reload();
                }

                // window.location.href = `/${routing.LOGIN}`;
            })
            .catch((error) => {
                toast.error("Mise à jour impossible", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
            });
    };
}















// Connexion User
export const UserConnexion = (usernameOremail, password, toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/users/auth/login`, {
                "email": usernameOremail,
                "password": password
            }, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                //console.log(response.data.data)
                dispatch({ type: FETCH_USER_SUCCESS });
                //console.log(response.data.data);
                setWithExpiration(localStorageKeys.userId, response.data?.data?._id, dureeDeVie);
                setWithExpiration(localStorageKeys.userName, response.data?.data?.firstname + " " + response.data?.data?.lastname, dureeDeVie);
                dispatch(fetchUsersAll());
                toast.success(response?.data?.message || "Vous ête maintenant connecté", { position: "bottom-right" });

                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch((error) => {
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
                toast.error(error?.response?.data?.message || "Imposible de se connecter" , { position: "bottom-right" });
            });
    };
}







// All users of plateforme
export function fetchUsersAll() {
    return async (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/users/get_users`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_USERS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Users);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
            });
    }
}











export function fetchUserById(idUser) {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/users/get_user/${idUser}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_USER_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}





export const UserUpdatePassword = (
    idUser,
    password,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/users/update-password/${idUser}`,
                {
                    password
                },
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                toast.success("Mot de passe Modifier avec succès", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_SUCCESS });
            })
            .catch((error) => {
                toast.error("Mot de passe non mis à jour", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
            });
    };
}








// Reset password
export const UserResetPasswordForget = (
    email,
    password,
    setStep,
    showModal,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/users/reset-password`,
                {
                    email,
                    password
                },
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                toast.success(response?.data?.message || "Mot de passe mise  à jour avec succès", { position: "bottom-right" });
                dispatch({ type: FETCH_USER_SUCCESS });
                setStep(1);
                showModal(true);
                window.location.href = `/${routing.LOGIN}`;
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || "Mot de passe non mis à jour", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
            });
    };
}




// Reset password
export const UserSendCodeverfiy = (
    email,
    phone,
    setSept,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/users/send-code-verify`,
                {
                    email,
                    phone
                },
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                toast.success( response?.data?.message || "Un code vous été envoyer sur votre email .", { position: "bottom-right" });
                setSept(2)
                dispatch({ type: FETCH_USER_SUCCESS });
            })
            .catch((error) => {
                toast.error( error?.response?.data?.message ||"Le code n'a pas été entrez email valide . ", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
            });
    };
}




// Reset password
export const UserverfiyCode = (
    email, phone,
    passwordverifield,
    setStep,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/users/verfiy-code-reset`,
                {
                    _id: email || phone,
                    email,
                    phone,
                    passwordverifield,
                },
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                toast.success(response?.data?.message || "Le Code est accepter avec succès .", { position: "bottom-right" });
                dispatch({ type: FETCH_USER_SUCCESS });
                setStep(3)
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || "Le code n'a pas été accepter entrer un code valide ", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
            });
    };
}







// Update statut user
export const UserUpdateStatut = (
    idUser,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST });
        await axios
            .patch(`${baseurl.url}/api/v1/users/statut_user/${idUser}`,
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                dispatch({ type: FETCH_USER_SUCCESS, payload: response.data.data });
                toast.success(response.data.message, { position: "bottom-right" });
                dispatch(fetchUsersAll());
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || "", { position: "bottom-right" })
                dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
            });
    };
}




