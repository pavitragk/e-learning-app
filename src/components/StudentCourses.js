import React, { useEffect } from 'react'
import { startGetStudentCourses } from '../actions/coursesAction'
import { useDispatch, useSelector } from 'react-redux'

const StudentCourses = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(startGetStudentCourses())
    }, [])

    const myCourses = useSelector((state) => {
        return state.courses.studentCourse
    })

    return (
        <div>
            {myCourses.length === 0 ? 'no courses found' :
                <div>courses are here</div>
            }

        </div>
    )

}

export default StudentCourses