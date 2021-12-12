const courseInitialState = {
    adminCourse: [],
    studentCourse: [],

    isLoading: true
}


const courseReducer = (state = courseInitialState, action) => {
    switch (action.type) {

        case 'ADMIN_COURSES': {
            return { ...state, adminCourse: [...action.payload] }
        } case 'STUDENT_COURSES': {
            return { ...state, studentCourse: [...action.payload] }
        }

        default: {
            return { ...state }
        }

    }

}

export default courseReducer