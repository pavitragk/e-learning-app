const usersInitialState = {
    data: [],
    user: {},
    isLoading: true
}


const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'USER_ACCOUNT': {
            return { ...state, data: [action.payload] }
        } case 'UPDATE_USER': {
            return { ...state, data: [action.payload] }
        } case 'LOGIN_USER': {
            return { ...state, user: [action.payload] }
        } case 'LOGIN_STUDENT': {
            return { ...state, user: { ...action.payload } }
        }
        default: {
            return { ...state.data }
        }

    }

}

export default usersReducer