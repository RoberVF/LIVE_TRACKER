import { Router } from 'express'

import { createChallenge, deleteChallenge, getAllChallenges, updateChallenge } from '../controllers/challenge.controllers.js'


const route = Router()

route.get("/", getAllChallenges)

route.post("/createChallenge", createChallenge)

route.put("/:id", updateChallenge)

route.delete("/:id", deleteChallenge)

export default route