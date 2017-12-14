const privateMessage = (state = {
    privateMessageIDs: {}
}, action) => {

    switch (action.type) {
        case 'PM_IDS_TO_PROPS': {
            return {
                privateMessageIDs: {
                    postID: action.payload[0],
                    posterID: action.payload[1],
                    userID: action.payload[2]
                }
            };
        }

        default: {
            return state;
        }
    }

};

export default privateMessage;