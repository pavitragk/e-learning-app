const studentsInitialState = {
    data: [],
    isLoading: true
}


const studentReducer = (state = studentsInitialState, action) => {
    switch (action.type) {

        case 'STUDENTS': {
            return { ...state, data: [...action.payload] }
        } case 'STUDENT_DELETE': {
            const deletedStudents = [...state.data].filter((ele) => {
                return ele._id !== action.payload._id
            })
            return { ...state, data: [...deletedStudents] }

        }

        default: {
            return { ...state }
        }

    }

}

export default studentReducer