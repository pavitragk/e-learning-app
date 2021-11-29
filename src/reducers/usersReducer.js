const usersInitialState = {
    data: [],
    isLoading: true
}


const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'USER_ACCOUNT': {
            return { ...state, data: [action.payload] }
        }
        default: {
            return { ...state.data }
        }

    }

}

export default usersReducer