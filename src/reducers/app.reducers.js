import { STORE_USER_DATA, STORE_VIDEO_DATA } from '../actions/app.action';

const initialState = {
    user: false,
    video: false
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:

            return {
                ...state,
                user: action.user,

            };
        case STORE_VIDEO_DATA: {
            return {
                ...state,
                video: action.video
            }
        };

        default:
            return state;
    }

}

export default appReducer;