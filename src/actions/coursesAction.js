import axios from "axios"

export const startGetAdminCourses = (formData, props) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {

                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    console.log(result)
                    dispatch(getAdminCourses(result))


                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const getAdminCourses = (result) => {

    return {
        type: 'ADMIN_COURSES',
        payload: result

    }

}

export const startGetStudentCourses = (formData, props) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {

                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    console.log(result)
                    dispatch(getStudentCourses(result))


                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const getStudentCourses = (result) => {

    return {
        type: 'STUDENT_COURSES',
        payload: result

    }

}

export const startAddCourses = (formData, props) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/courses', formData, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {


                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    console.log(result)
                    // dispatch(addAdminCourses(result))


                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const addAdminCourses = (result) => {

    return {
        type: 'ADD_COURSES',
        payload: result

    }

}