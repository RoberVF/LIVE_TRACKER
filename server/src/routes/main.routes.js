import { Router } from 'express'

import { createChallenge, deleteChallenge, getAllChallenges, updateChallenge } from '../controllers/challenge.controllers.js'


const route = Router()

route.get("/challenges/", getAllChallenges)

route.post("/challenges/createChallenge", createChallenge)

route.put("/challenges/:id", updateChallenge)

route.delete("/challenges/:id", deleteChallenge)

export default route