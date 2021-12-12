import React, { useEffect } from 'react'
import { startGetAdminCourses } from '../../actions/coursesAction'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Typography } from '@mui/material'

const MyCourses = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(startGetAdminCourses())
    }, [])

    const myCourses = useSelector((state) => {
        return state.courses.adminCourse
    })

    return (
        <div>
            {myCourses.length === 0 ? 'no courses found' :
                <Typography alignContent="center">courses are here</Typography>
            }

        </div>

    )

}

export default MyCourses