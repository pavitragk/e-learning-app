const usersInitialState = {
    data: [],
    isLoading: true
}


const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {

        default: {
            return { ...state.data }
        }

    }

}

export default usersReducer