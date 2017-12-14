const auth = (state = {
    auth: {
        isLoggedIn: false
    }
}, action) => {

    switch (action.type) {
        case 'CHANGE_LOGIN_STATUS': {
            return {
                auth: {
                    isLoggedIn: action.payload
                }
            };
        }

        default: {
            return state;
        }
    }

};

export default auth;