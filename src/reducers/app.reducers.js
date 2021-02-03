import { STORE_USER_DATA, RESET_REDUX } from '../actions/app.action';

const initialState = {
    user: false,

};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:
            console.log('Hi')
            return {
                ...state,
                user: action.user,

            };

        case RESET_REDUX:
            console.log('Reducer: RESET_REDUX')
            return initialState; //Always return the initial state

    }

}

export default appReducer;