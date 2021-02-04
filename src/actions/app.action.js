export const STORE_USER_DATA = "STORE_USER_DATA";

export function storeUserData(userData) {
    return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

