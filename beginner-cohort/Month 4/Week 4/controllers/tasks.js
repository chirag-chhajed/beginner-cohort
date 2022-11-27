let {data,randomNumber} = require('../data')

const getAllTasks = (req,res) => {
    res.send(200).json({success: true,data:{ ...data}})
}

const createTask = (req,res) => {
    const {task} = req.body
    if(!task){
        return res
        .status(400)
        .json({success: false,msg: 'please provide name value'})
    }
    res.status(201).send({success:true, data: [...data,{id: randomNumber(), task: task}]},)
}
const getTask = (req,res)=>{
    const {id} = req.params
    const particularTask = data.find(task => task.id === Number(id))
    if(!particularTask){
        return res
        .status(404)
        .json({success:false,msg: `no person with id ${id}`})
    }
    res.status(200).json({success: true,data: particularTask})

}
const updateTask = (req,res) => {
    const {id} = req.params
    
    const particularTask = data.find(task => task.id === Number(id))

    if(!particularTask){
        return res
        .status(404)
        .json({success:false,msg: `no person with id ${id}`})
    }
    const updatedTasks = data.map(task =>{
        if(task.id === Number(id)){
            task.task = req.body.task
        } 
        return data
    })
    res.status(200).json({success: true,data: updatedTasks})
}
const deleteTask = (req,res) => {
    const {id} = req.params
    const particularTask = data.find(task => task.id === Number(id))
    if (!particularTask) {
        return res
          .status(404)
          .json({ success: false, msg: `no task with id ${id}` })
    }
    const updatedTasks = data.filter(
        task => task.id !== Number(id)
    )
    res.status(200).json({success:true,data: updatedTasks})
}


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}