import {Router} from 'express'

const route = Router()

route.get("/tasks", (req, res) => {
    res.send("OK")
})

export default route