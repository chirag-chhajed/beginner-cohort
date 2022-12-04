import studentData from "../data/studentData.js";
import { nanoid } from "nanoid";

const data = {
    studentData: studentData,
    setStudentData: function(data){
        this.studentData = data
    }
}

const getAllStudents = (req,res) => {
    res.status(200).json(data.studentData)
}

const createStudent = (req,res) => {
    const {firstName,lastName} = req.body
    if(firstName && lastName){
        data.setStudentData([...data.studentData,{id:nanoid(),firstName:firstName,lastName:lastName}])
        return res
        .status(201)
        .json(data.studentData)
    } else{
        return res.status(400).send({msg: `please provide both the values`})
    }

}

const getStudent = (req,res) => {
    const {id} = req.params
    const particularStudent = data.studentData.find(student => student.id == id)
    if(particularStudent){
        return res.status(200).json(particularStudent)
    } else {
        return res.status(400).json({msg:`No student with the id ${id}`})
    }
}

export {getAllStudents,createStudent,getStudent}