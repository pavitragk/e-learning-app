import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetStudents, startDeleteStudent } from '../actions/usersAction'
import swal from '@sweetalert/with-react';


const StudentTable = (props) => {
    const { toggle } = props
    const student = {}
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(startGetStudents())
    }, [toggle])

    const students = useSelector((state) => {
        return state.students.data
    })

    // console.log("all", students)

    const showDetails = (student) => {
        swal(
            <div>
                <h1>{student.name}</h1>
                <hr />
                <p>
                    Name:  {student._id}
                </p>
                <p>
                    email:  {student.email}
                </p>
                <p>Role: {student.role}</p>

            </div>
        )
    }

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this student!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(startDeleteStudent(id))

                }
            });


    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>

                </thead>

                <tbody>
                    {students.map((student) => {
                        return (
                            <tr key={student._id}>
                                <td>{student._id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.role}</td>
                                <td><button onClick={() => {
                                    showDetails(student)
                                }}>View Details</button></td>
                                <td><button onClick={() => {
                                    handleDelete(student._id)

                                }}>delete</button></td>
                            </tr>

                        )
                    })}
                </tbody>

            </table>

        </div >
    )

}

export default StudentTable