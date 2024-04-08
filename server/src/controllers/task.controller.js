import Task from '../models/Task.js'
import Challenge from '../models/Challenge.js'

export const getAllTasks = async (req, res) => {

    try {
        const { challenge } = req.params
        const tasksChallenge = await Challenge.findOne({ name: challenge }).populate('tasks')

        let tasksList = []

        for (let i = 0; i < tasksChallenge.tasks.length; i++) {
            let taskToAdd = await Task.findById(tasksChallenge.tasks[i])
            tasksList.push(taskToAdd)
        }

        res.json(tasksList)

    } catch (e) {
        console.log(e)
        return res.status(404).json({
            "message": "Task not found!",
            "status": 404
        })

    }

}

export const createTask = async (req, res) => {
    try{
        const {challenge, completed, date, info} = req.body // <- Lo que hara el front: <input name=challenge type=dropdown/>
        
        const challengeToFind = await Challenge.findOne({name:challenge})

        if(!challengeToFind){
            return res.status(404).json({
                "message": "Challenge not found!",
                "status": "404"
            })
        }        

        const newTask = new Task({
            challenge,
            completed,
            date,
            info
        })

        const savedTask = await newTask.save()

        challengeToFind.tasks.push(savedTask._id)
        await challengeToFind.save()

        res.json({
            challengeToFind,
            "Saved task": savedTask
        })

    } catch(e){
        console.log(e)
        return res.status(404).json({
            "message": "Task cannot be created!",
            "status": 404
        })
    }
}

export const updateTask = async (req, res) => {
    // No funciona, devuelve null
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        if(!task){
            return res.status(404).json({
                "message": "Task no found!",
                "status": 404
            })
        }
        res.json(task)
    } catch(e){
        return res.status(404).json({
            "message": "Task cannot be updated!",
            "status": 404
        })
    }
}

export const deleteTask = async (req, res) => {
    // No funciona, devuelve null
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        res.json(task)
    } catch(e){
        return res.status(404).json({
            "message": "Task cannot be deleted!",
            "status": 404
        })
    }
}