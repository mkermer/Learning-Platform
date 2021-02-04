export const STORE_USER_DATA = "STORE_USER_DATA";

export const RESET_REDUX = "RESET_REDUX";


// export function storeResetRedux() {
//     return { type: RESET_REDUX }
// }
export function storeUserData(userData) {
    return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

