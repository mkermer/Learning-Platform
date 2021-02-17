export const STORE_USER_DATA = "STORE_USER_DATA";
export const STORE_VIDEO_DATA = "STORE_VIDEO_DATA ";
export const STORE_MEETING_DATA = "STORE_MEETING_DATA"
export const RESET_REDUX = "RESET_REDUX";

export function storeResetRedux() {
    return { type: RESET_REDUX }
}

export function storeUserData(userData) {
    return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

export function storeVideoData(videoData) {
    return { type: STORE_VIDEO_DATA, video: videoData }
}


export function storeMeetingData(meetingData) {
    return {type: STORE_MEETING_DATA, meeting: meetingData}
}


