import axios from "axios";
import { FETCH_ADMINS_FAILURE, FETCH_ADMINS_REQUEST, FETCH_ADMINS_SUCCESS, FETCH_ADMINS_SUCCESS_2, FETCH_ADMIN_FAILURE, FETCH_ADMIN_REQUEST, FETCH_ADMIN_SUCCESS } from "../../app/actions/actions";
import { ROUTES } from "../../config/routingUrl";
import { dureeDeVie, setWithExpiration } from "../../utils/storage/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../utils/storage/localvalue";
import { baseurl } from "../../utils/url/baseurl";
import { saveDataToFile } from "../DataLocal";
import { profileRoleType } from "../../utils/dataApi/dataFormApi";



// Create Admin
export const AdminCreate = (
    data,
    navigate,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios
            .post(
                `${baseurl.url}/api/v1/admins`,
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
                dispatch({ type: FETCH_ADMIN_SUCCESS });
                navigate(`/${ROUTES.LOGIN}`)
                // window.location.href = `/${ROUTES.LOGIN}`;

            })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
                toast.error(`${error.response.data.message}`, { position: "bottom-right" })
            });
    };
}





export const AdminUpdateById = (
    idAdmin,
    data,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios
            .put(
                `${baseurl.url}/api/v1/admins/edit/${idAdmin}`,
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
                toast.success("Compte utilisateur mis à jour avec succès", { position: "bottom-right" });
                dispatch({ type: FETCH_ADMIN_SUCCESS, payload: response.data.data });
                // window.location.href = `/${ROUTES.LOGIN}`;
            })
            .catch((error) => {
                toast.error("Mise à jour impossible", { position: "bottom-right" })
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
            });
    };
}















// Connexion Admin
export const AdminConnexion = (adminnameOremail, password, redirect, toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/admins/login`, {
                "email": adminnameOremail,
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
                dispatch({ type: FETCH_ADMIN_SUCCESS });
                //console.log(response.data.data);
                setWithExpiration(localStorageKeys.adminId, response.data?.data?._id, dureeDeVie);
                setWithExpiration(localStorageKeys.adminCoverPicture, response.data?.data?.profilePicture, dureeDeVie);
                setWithExpiration(localStorageKeys.adminRole, response.data?.data?.role, dureeDeVie);
                setWithExpiration(localStorageKeys.adminName, response.data?.data?.firstname + " " + response.data?.data?.lastname, dureeDeVie);
                setWithExpiration(localStorageKeys.profileRole, response.data?.data?.role, dureeDeVie);
                dispatch(fetchAdminsAll());
                toast.success("Vous étes maintenant connecté", { position: "bottom-right" });

                setTimeout(() => {
                    redirect(`/${ROUTES.DASHBOARD}`);
                    // window.location.href = `/${ROUTES.DASHBOARD}`;
                }, 1000);
            })
            .catch((error) => {
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
                toast.error(`${error.response.data.message}`, { position: "bottom-right" });
            });
    };
}







// All admins of plateforme
export function fetchAdminsAll() {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMINS_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/admins/get_admins`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_ADMINS_SUCCESS, payload: response.data.data });
            dispatch({ type: FETCH_ADMINS_SUCCESS_2, payload: response.data.data });
            saveDataToFile(response.data.data, localStorageData.Admins);
        })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: FETCH_ADMINS_FAILURE, payload: error.message });
            });
    }
}











export function fetchAdminById(idAdmin) {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios.get(`${baseurl.url}/api/v1/admins/get_admin/${idAdmin}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            //console.log(response.data.data);
            dispatch({ type: FETCH_ADMIN_SUCCESS, payload: response.data.data });
        })
            .catch((error) => {
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message })
                //console.log(error);
            });
    }
}





export const AdminUpdatePassword = (
    idAdmin,
    password,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMINS_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/admins/update-password/${idAdmin}`,
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
                dispatch({ type: FETCH_ADMIN_SUCCESS });
            })
            .catch((error) => {
                toast.error("Mot de passe non mis à jour", { position: "bottom-right" })
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
            });
    };
}








// Reset password
export const AdminResetPasswordForget = (
    email,
    password,
    setStep,
    showModal,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/admins/reset-password`,
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
                toast.success("Mot de passe Modifier avec succès", { position: "bottom-right" });
                dispatch({ type: FETCH_ADMIN_SUCCESS });
                setStep(1);
                showModal(true);
                window.location.href = `/${ROUTES.LOGIN}`;
            })
            .catch((error) => {
                toast.error("Mot de pass", { position: "bottom-right" })
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
            });
    };
}




// Reset password
export const AdminSendCodeverfiy = (
    email,
    phone,
    setSept,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/admins/send-code-verify`,
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
                toast.success("Un code vous été envoyer sur votre email . ", { position: "bottom-right" });
                setSept(2)
                dispatch({ type: FETCH_ADMIN_SUCCESS });
            })
            .catch((error) => {
                toast.error("Le code n'a pas été entrez email valide . ", { position: "bottom-right" })
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
            });
    };
}




// Reset password
export const AdminverfiyCode = (
    email, phone,
    passwordverifield,
    setStep,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ADMIN_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/admins/verfiy-code-reset`,
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
                toast.success("Le Code est accepter avec succès .", { position: "bottom-right" });
                dispatch({ type: FETCH_ADMIN_SUCCESS });
                setStep(3)
            })
            .catch((error) => {
                toast.error("Le code n'a pas été accepter entrer un code valide ", { position: "bottom-right" })
                dispatch({ type: FETCH_ADMIN_FAILURE, payload: error.message });
            });
    };
}




