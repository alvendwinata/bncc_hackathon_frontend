import * as actionTypes from "../actions/actionTypes";

export const login = (email, password) => {
    return {
        type: actionTypes.LOGIN,
        email: email,
        password: password
    };
};

export const loginSuccess = user => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        user: user
    };
};

export const loginFail = error => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};

export const authOkError = () => {
    return {
        type: actionTypes.AUTH_OK_ERROR
    };
};

export const register = (email, password, name, phone) => {
    return {
        type: actionTypes.REGISTER,
        email: email,
        password: password,
        name: name,
        phone: phone
    };
};

export const registerSuccess = (user) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        user: user
    };
};

export const getUser = () => {
    return {
        type: actionTypes.GET_USER
    }
}
