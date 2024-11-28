// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import languageReducer from './reducers/languageReducer';
import userReducer from './reducers/userReducer';
import codepostalReducer from './reducers/codepostalReducer';
import adminReducer from './reducers/adminReducer';
import categoryReducer from './reducers/categoryReducer';
import publicationReducer from './reducers/publicationReducer';
import regionReducer from './reducers/regionReducer';



const rootReducer = combineReducers({

    categorys :categoryReducer,
    regions :regionReducer,
    codepostals:codepostalReducer,
    language:languageReducer,
    publications:publicationReducer,
    users: userReducer,
    admins: adminReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;