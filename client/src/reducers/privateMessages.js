const privateMessage = (state = {
    privateMessageIDs: {},
    privateMessages: {}
}, action) => {

    switch (action.type) {
        case 'PM_IDS_TO_PROPS': {
            // console.log(action.payload);
            return {
                privateMessageIDs: {
                    postID: action.payload[0],
                    posterID: action.payload[1],
                    userID: action.payload[2],
                    postSummary: action.payload[3],
                    posterUsername: action.payload[4]
                }
            };
        }

        case 'PM_MESSAGES_TO_PROPS': {
            return {
                privateMessages: {
                    //tbd

                }
            };
        }

        default: {
            return state;
        }
    }

};

export default privateMessage;