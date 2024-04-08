import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    challengeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Challenge",
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
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