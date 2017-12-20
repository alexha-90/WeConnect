const auth = (state = {
    auth: {
        isLoggedIn: false,
        username: ''
    }
}, action) => {

    switch (action.type) {
        case 'CHANGE_LOGIN_STATUS': {
            if (action.payload.length) {
                return {
                    auth: {
                        isLoggedIn: true,
                        username: action.payload
                    }
                };
            }
            return {...state};
        }

        default: {
            return state;
        }
    }

};

export default auth;