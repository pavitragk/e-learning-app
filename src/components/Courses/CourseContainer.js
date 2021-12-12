import React, { useState } from 'react'
import CourseForm from './CourseForm'
import AdminCourses from './AdminCourses'
import { Container } from '@mui/material'

const CourseContaiiner = (props) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Container style={{ margin: "100px" }} sx={{ m: 2 }} component="main" maxWidth="xs">


            <div>
                <button onClick={handleToggle}>Add course</button>
                {toggle ? <CourseForm /> : <AdminCourses />}



            </div>
        </Container>
    )

}
export default CourseContaiiner