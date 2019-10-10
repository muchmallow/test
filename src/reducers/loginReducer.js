import {CLEAR_FORM} from "../components/FormConstants";
const SET_USER_DATA = "login/SET_USER_DATA";
const SET_IS_AUTH_TRUE = "login/SET_IS_AUTH_TRUE";
const SET_IS_AUTH_FALSE = "login/SET_IS_AUTH_FALSE";

const initialState = {
    isAuth: false,
    users: []
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                users: [...state.users, {email: action.email, password: action.password}]
            }
        }
        case SET_IS_AUTH_TRUE: {
            return {
                ...state,
                isAuth: true
            }
        }
        case SET_IS_AUTH_FALSE: {
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return state;
    }
};

const setAuthUserDataAC = (email, password) => ({
    type: SET_USER_DATA,
    email,
    password
});

const setIsAuthTrueAC = () => ({
    type: SET_IS_AUTH_TRUE
});

export const setIsAuthFalseAC = () => ({
    type: SET_IS_AUTH_FALSE
});

//----------------------------------------------------------------
//A piece of formReducer

export const clearFormAC = () => ({
    type: CLEAR_FORM
});
//----------------------------------------------------------------

export const loginTC = (email, password) => async (dispatch) => {
    await dispatch(setAuthUserDataAC(email, password));
    await dispatch(setIsAuthTrueAC());
};

export default loginReducer;