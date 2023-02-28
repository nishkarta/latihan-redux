import * as types from '../type'


const initialState = {
    authenticated: false,
    bio: {},
    showLoading: false,
    isError: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
            };
        case types.SET_UNAUTHENTICATED:
            return {
                initialState,
                authenticated: false,
                credentials: {},
            };
        case types.SET_USER:
            return {
                authenticated: true,
                ...action.payload,
            };
        case types.SET_USERNAME:
            return {
                bio: action.payload,
            };
        case types.SET_USERNAME_FAILED:
            return {
                ...state,
                isError: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;