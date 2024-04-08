import app from './app.js'
import { connectDB } from './database.js'

import {PORT} from './config.js'

try{
    app.listen(PORT, () => {
        console.log(`>> SERVER ON PORT ${PORT}`)
    })
    connectDB()
}catch(e){
    console.log(e)
}