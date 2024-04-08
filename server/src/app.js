import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import mainRoutes from './routes/main.routes.js'

import {FRONTEND_URL} from './config.js'

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('dev'))

//CORS
const corsOptions = {
    origin: function(origin, callback){
        if(!origin || FRONTEND_URL === origin){
            callback(null, true)
        } else{
            callback(new Error("Not allowed by CORS Policity"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.options("*", cors())


app.use('/api', mainRoutes)

export default app