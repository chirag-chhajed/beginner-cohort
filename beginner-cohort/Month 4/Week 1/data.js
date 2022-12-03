let randomNumber = () => {
   return Math.floor(Math.random()*1_00_000_000)
}


let data = [
    {
        id: randomNumber(),
        task: "Completing the task"
    },
    {
        id: randomNumber(),
        task: "Task done"
    }
]

module.exports = {data,randomNumber}
console.log(data)
