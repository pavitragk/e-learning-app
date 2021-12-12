import React, { useState } from 'react'
import { startAddCourses } from '../../actions/coursesAction'
import { useDispatch } from 'react-redux'

const CourseForm = (props) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [releaseDate, setReleaseDaate] = useState("")
    const [isDelete, setIsDelete] = useState(false)
    const [category, setCategory] = useState("")
    const [validity, setValidity] = useState("")
    const [level, setLevel] = useState("")
    const [author, setAuthor] = useState("")

    const dispatch = useDispatch()


    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "description") {
            setDescription(e.target.value)
        } else if (e.target.name === "duration") {
            setDuration(e.target.value)
        } else if (e.target.name === "releaseDate") {
            setReleaseDaate(e.target.value)
        } else if (e.target.name === "isDelete") {
            setIsDelete(e.target.value)
        } else if (e.target.name === "category") {
            setCategory(e.target.value)
        } else if (e.target.name === "validity") {
            setValidity(e.target.value)
        } else if (e.target.name === "level") {
            setLevel(e.target.value)
        } else if (e.target.name === "author") {
            setAuthor(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name: name,
            description: description,
            releaseDate: releaseDate,
            isDelete: isDelete,
            category: category,
            validity: validity,
            level: level,
            author: author
        }
        console.log("course", formData)
        dispatch(startAddCourses(formData, props))


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" value={name} onChange={handleChange} name="name" />
                <br />
                <label>description</label>
                <textarea value={description} onChange={handleChange} name="description"></textarea>
                <br />
                <label >duration</label>
                <input type="number" value={duration} onChange={handleChange} name="duration" />
                <br />
                <label>release date</label>
                <input type="date" value={releaseDate} onChange={handleChange} name="releaseDate" />
                <br />
                <input type="radio" value={isDelete} onChange={handleChange} name="isDelete" /> isDelete
                <br />
                <label>category</label>
                <select value={category} onChange={handleChange} name="category">
                    <option>Choose the courses</option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>javascript</option>
                    <option>reactjs</option>
                    <option>nodejs</option>
                    <option>expressjs</option>
                    <option>mongodb</option>

                </select>
                <br />
                <label>validity</label>
                <input type="number" value={validity} onChange={handleChange} name="validity" />
                <br />
                <label>level</label>
                <select value={level} onChange={handleChange} name="level" >
                    <option>Choose the levels</option>
                    <option> beginner</option>
                    <option> intermediate </option>
                    <option> expert</option>
                </select>
                <br />
                <label>author</label>
                <input value={author} onChange={handleChange} name="author" />
                <br />
                <button>add</button>

            </form>
        </div>

    )
}

export default CourseForm