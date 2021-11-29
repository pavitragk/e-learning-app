import axios from 'axios'

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
                    dispatch(setLogin(formData))
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

export const setLogin = (formData) => {
    return {
        type: 'LOGIN_USERS',
        payload: formData


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







