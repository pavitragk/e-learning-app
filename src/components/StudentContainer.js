import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import StudentsForm from './StudentsForm'
import StudentTable from './StudentTable'
import { startGetStudents } from '../actions/usersAction'


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
        <div>
            {toggle ? <StudentsForm handleClick={handleClick} /> :
                <div>

                    <button onClick={handleClick}>Add student</button>
                </div>
            }
            <StudentTable toggle={toggle} />



        </div>
    )

}

export default StudentContainer