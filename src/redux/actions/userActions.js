import axios from 'axios';
import API from '../api';
import * as types from '../type.js'

export const loginUser = (body) => {
    return (dispatch) => {
        axios
            .post(`${API}/user/login`, body)
            .then((res) => {
                console.log(res)
                setAuthorizationHeader(res?.data?.token);
                dispatch({
                    type: types.SET_USERNAME,
                    payload: {
                        username: res.data?.username
                    },
                });

                localStorage.setItem("username", res.data.username);
                localStorage.setItem("token", res.data.token);
                dispatch({ type: types.SET_AUTHENTICATED });
            })
            .catch((err) => {
                console.log(err)
            });
    }

}

const setAuthorizationHeader = (token) => {
    const accessToken = `${token}`;
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common["Authorization"] = accessToken; // Initialize headers in postman
};