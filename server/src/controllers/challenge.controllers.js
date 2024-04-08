import Challenge from '../models/Challenge.js'


export const getAllChallenges = async (req, res) => {
    const challenges = await Challenge.find()
    res.json(challenges)
}

export const createChallenge = async (req, res) => {
    const { name, description, dateToStart, dateToEnd, tasks } = req.body

    const newChallenge = new Challenge({
        name,
        description,
        dateToStart,
        dateToEnd,
        tasks
    })

    const savedChallenge = await newChallenge.save()

    res.json(savedChallenge)
}

export const updateChallenge = async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(challenge)
    } catch(e){
        return res.status(404).json({
            "message": "Challenge not updated!",
            "status": 404
        })
        console.log(e)
    }
}

export const deleteChallenge = async (req, res) => {
    try{ 
        const challenge = await Challenge.findByIdAndDelete(req.params.id, req.body)
        res.json(challenge)
    } catch(e){
        return res.status(404).json({
            "message": "Challenge not deleted!",
            "status": 404
        })
        console.log(e)
    }
}