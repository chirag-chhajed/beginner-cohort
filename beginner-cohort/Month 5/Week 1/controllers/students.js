import studentData from "../data/studentData.js";
import { nanoid } from "nanoid";

const data = {
    studentData: studentData,
    setStudentData: function (data) {
        this.studentData = data
    }
}

const getAllStudentsData = (req, res) => {
    res.status(200).json(data.studentData)
}

const createStudentData = (req, res) => {
    const { firstName, lastName } = req.body
    if (firstName && lastName) {
        data.setStudentData([...data.studentData, { id: nanoid(), firstName: firstName, lastName: lastName }])
        return res
            .status(201)
            .json(data.studentData)
    } else {
        return res.status(400).send({ msg: `please provide both the values` })
    }

}

const getStudentData = (req, res) => {
    const { id } = req.params
    const particularStudent = data.studentData.find(student => student.id == id)
    if (particularStudent) {
        return res.status(200).json(particularStudent)
    } else {
        return res.status(400).json({ msg: `No student with the id ${id}` })
    }
}

const updateStudentData = (req, res) => {
    const { id } = req.params
    const { firstName, lastName } = req.body
    const particularStudent = data.studentData.find(student => student.id == id)

    if (!particularStudent) {
        return res
            .status(404)
            .json({ msg: `No student with the id ${id}` })
    }

    const updatedData = data.studentData.map(student => {
        if (student.id == id) {
            student.firstName = firstName,
            student.lastName = lastName  
        }
        return data.studentData
    })
    data.setStudentData(...updatedData)
    res.status(200).json(data.studentData)
}

const deleteStudentData = (req,res) => {
    const {id} = req.params
    const particularStudent = data.studentData.find(student => student.id == id)

    if (!particularStudent) {
        return res
            .status(404)
            .json({ msg: `No student with the id ${id}` })
    }

    const updatedData = data.studentData.filter(
        student => student.id !== id
    )
    data.setStudentData(updatedData)
    res.status(200).json(data.studentData)
}

export { 
    getAllStudentsData, 
    createStudentData, 
    getStudentData, 
    updateStudentData,
    deleteStudentData 
}