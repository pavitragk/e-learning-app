import axios from 'axios'
import jwt_decode from "jwt-decode";


export const startUserRegister = (formData, props) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/register', formData)
            .then((response) => {

                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    // console.log(result)
                    dispatch(setUser(result))
                    alert("admin successfully created")
                    props.history.push('/login')
                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const setUser = (result) => {

    return {
        type: 'USERS',
        payload: result

    }

}

export const startUserLogin = (formData, props) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/login', formData)
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    var decodedData = jwt_decode(result.token);

                    // console.log("jwt", decoded);
                    dispatch(setLogin(decodedData))
                    alert('successfully logged in')
                    localStorage.setItem('token', result.token)
                    console.log(localStorage.token)
                    props.history.push('/home')
                    props.handleAuth()

                }

            })
            .catch((res) => {
                alert(res.message)
            })

    }
}

export const setLogin = (userData) => {
    return {
        type: 'LOGIN_USER',
        payload: userData


    }


}

export const startUserAccount = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/account', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result = res.data
                // console.log("res", result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {

                    dispatch(setAccount(result))


                }

            })
            .catch((res) => {
                alert(res.message)
            })

    }
}

export const setAccount = (userData) => {
    return {
        type: 'USER_ACCOUNT',
        payload: userData



    }


}

export const startUpdateUser = (formData) => {


    return (dispatch) => axios.put('https://dct-e-learning.herokuapp.com/api/admin', formData, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }

    }).then((response) => {
        const result = response.data
        dispatch(updateUser(result))

    })

}

export const updateUser = (user) => {

    return {
        type: 'UPDATE_USER',
        payload: user

    }
}

export const startStudentRegister = (formData, props) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/students', formData, {
            headers: {
                'Authorization': localStorage.getItem('token')

            }
        })
            .then((response) => {

                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    console.log(result)
                    dispatch(registerStudent(result))


                    // props.history.push('/students')
                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const registerStudent = (user) => {

    return {
        type: 'REGISTER_STUDENT',
        payload: user

    }
}

export const startGetStudents = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students', {
            headers: {
                'Authorization': localStorage.getItem('token')

            }
        })
            .then((response) => {

                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    console.log(result)
                    dispatch(getStudents(result))


                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const getStudents = (users) => {

    return {
        type: 'STUDENTS',
        payload: users

    }
}



export const startDeleteStudent = (id) => {

    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')

            }
        })
            .then((response) => {

                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    // console.log("student", result)
                    dispatch(deleteStudent(result))


                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const deleteStudent = (student) => {

    return {
        type: 'STUDENT_DELETE',
        payload: student

    }
}

export const startStudentLogin = (formData, props) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/students/login', formData)
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    var decodedData = jwt_decode(result.token);

                    // console.log("jwt", decoded);
                    dispatch(setStudent(decodedData))
                    alert('successfully logged in')
                    localStorage.setItem('token', result.token)
                    console.log(localStorage.token)
                    props.history.push('/home')
                    props.handleAuth()

                }

            })
            .catch((res) => {
                alert(res.message)
            })

    }
}

export const setStudent = (userData) => {
    return {
        type: 'LOGIN_STUDENT',
        payload: userData


    }


}












