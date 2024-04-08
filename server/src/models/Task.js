import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    challenge: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

export default mongoose.model("Task", taskSchema)