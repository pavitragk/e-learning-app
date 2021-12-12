import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import StudentsForm from './StudentsForm'
import StudentTable from './StudentTable'
import { startGetStudents } from '../actions/usersAction'
import { Container } from '@mui/material'


const StudentContainer = (props) => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    useEffect(() => {

        dispatch(startGetStudents())
    }, [toggle])

    return (
        <Container style={{ margin: "100px" }} sx={{ m: 2 }} component="main" maxWidth="xs">

            <div>
                {toggle ? <StudentsForm handleClick={handleClick} /> :
                    <div>

                        <button onClick={handleClick}>Add student</button>
                    </div>
                }
                <StudentTable toggle={toggle} />



            </div>
        </Container>
    )

}

export default StudentContainer