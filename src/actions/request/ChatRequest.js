



import axios from "axios";
import { FETCH_CONVERSATIONS_FAILURE, FETCH_CONVERSATIONS_SEND, FETCH_CONVERSATIONS_SUCCESS, FETCH_PARTICIPANTS_SUCCESS, FETCH_PARTICIPANTS_SUCCESS_2, REQUEST_FAILURE_CONVERSATION, REQUEST_SUCCESS_CONVERSATION, SEND_REQUEST_CONVERSATION, SEND_REQUEST_SHOP } from "../../app/actions/actions";
import { routing } from "../../config/routing";
import { dureeDeVie, setWithExpiration } from "../../config/localvalueFuction";
import { localStorageData, localStorageKeys } from "../../config/localvalue";
import { saveDataToFile } from "../DataLocal";
import { baseurl } from "../../config/baseurl";




// Add New Conversation
export const ConversationCreate = (
    senderId, receiverId,
    message,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION });
        await axios
            .post(`${baseurl.url}/api/v1/chat/create_conversation`,
                {
                    "senderId": senderId,
                    "receiverId": receiverId
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
                dispatch({ type: REQUEST_SUCCESS_CONVERSATION, payload: response.data.data });
                toast.success(`Nouvelle conversation créer avec cet utilisateur`);
                dispatch(fetchAllConversationUserById(getAndCheckLocalStorage(localStorageKeys.userId)));

                // s'il y a un message
                if(message){
                    dispatch(ConversationSendMessage(response.data?.data._id,senderId,message,toast))
                }
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE_CONVERSATION, payload: error.message });
                toast.error(`Conversation non créer`)
            });
    };
}



// New Group
export const ConversationCreateNewGroup = (
    groupName, participants,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION });
        await axios
            .post(`${baseurl.url}/api/v1/chat/create_group`,
                {
                    "groupName": groupName,
                    "participants": participants
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
                dispatch({ type: REQUEST_SUCCESS_CONVERSATION, payload: response.data });
                toast.success(`Nouvelle conversation créer avec cet utilisateur`);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE_CONVERSATION, payload: error.message });
                toast.error(`Conversation non créer`);
            });
    };
}







// send message dans la coversation 
export const ConversationSendMessage = (
    conversationId,
    senderId, content, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION });
        await axios
            .post(`${baseurl.url}/api/v1/chat/send_message`,
                {
                    "conversationId": conversationId,
                    "senderId": senderId,
                    "content": content,
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
                dispatch({ type: REQUEST_SUCCESS_CONVERSATION,payload:response.data.data });
                toast.success(`Message envoyé avec succès`);
                dispatch(fetchConversationById(conversationId));
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE_CONVERSATION, payload: error.message });
                // toast.error(`Message Non envoyé`);
            });
    };
}




// send message dans la coversation 
export const ConversationSendDevisMessage = (
    conversationId, senderId, content, title, items,clientId, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION });
        await axios
            .post(`${baseurl.url}/api/v1/chat/send_devis`,
                {
                    title,
                    conversationId, 
                    senderId, 
                    content, 
                    items, 
                    clientId
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
                dispatch({ type: REQUEST_SUCCESS_CONVERSATION,payload:response.data.data});
                toast.success(`Message envoyé avec succès`);
                dispatch(fetchConversationById(conversationId));
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE_CONVERSATION, payload: error.message });
                toast.error(`Message Non envoyé`)
            });
    };
}




// Add Participant in conversation
export const ConversationAddParticipantById = (
    conversationId,
    userId, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION });
        await axios
            .post(`${baseurl.url}/api/v1/chat/add_participant/${conversationId}`,
                {
                    "userId": userId
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
                dispatch({ type: REQUEST_SUCCESS_CONVERSATION });
                toast.success(`Utilisateur ajouter a la conversation`)
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE_CONVERSATION, payload: error.message });
                toast.error(`Utilisateur non ajouter la conversation`);
            });
    };
}




// Remove Participant in conversation
export const ConversationRemoveParticipantById = (
    conversationId,
    userId, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION });
        await axios
            .delete(`${baseurl.url}/api/v1/chat/remove_participant/${conversationId}/${userId}`,
                {
                    "userId": userId
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
                dispatch({ type: REQUEST_SUCCESS_CONVERSATION });
                toast.success(`Utilisateur ajouter a la conversation`)
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE_CONVERSATION, payload: error.message });
                toast.error(`Utilisateur non ajouter la conversation`)
            });
    };
}



























// get conversation user by id 
export const fetchAllConversationUserById = (idUser) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CONVERSATIONS_SEND })
        try {
            const response = await axios.get(`${baseurl.url}/api/v1/chat/get_user_conversations/${idUser}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            });
            dispatch({ type: FETCH_CONVERSATIONS_SUCCESS, payload: response.data.data });
            // saveDataToFile(response.data.data, localStorageData.Discutions);
            //console.log(response.data.data);
        } catch (error) {
            dispatch({ type: FETCH_CONVERSATIONS_FAILURE });
            //console.log(error)
        }
    };
};





// recuperer une conversaiotn
export const fetchConversationById = (idConversation) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION })
        try {
            const response = await axios.get(`${baseurl.url}/api/v1/chat/get_conversation/${idConversation}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            });
            dispatch({ type: REQUEST_SUCCESS_CONVERSATION, payload: response.data.data })
            dispatch({ type: REQUEST_SUCCESS_CONVERSATION, payload: response.data.data })
            //console.log(response.data.data);
        } catch (error) {
            dispatch({ type: REQUEST_FAILURE_CONVERSATION })

        }
    };
};



// recuperer tous les participants d'une conversation
export const fetchConversationAllParticipantsByConversationId = (conversationId) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST_CONVERSATION })
        try {
            const response = await axios.get(`${baseurl.url}/api/v1/chat/get_conversation_participants/${conversationId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            });
            dispatch({ type: FETCH_PARTICIPANTS_SUCCESS, payload: response.data.data })
            dispatch({ type: FETCH_PARTICIPANTS_SUCCESS_2, payload: response.data.data })
            //console.log(response.data.data);
        } catch (error) {
            dispatch({ type: REQUEST_FAILURE_CONVERSATION })
        }
    };
};

