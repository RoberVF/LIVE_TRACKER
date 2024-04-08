import mongoose from 'mongoose'

const challengeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    dateToStart: {
        type: String,
        required: true,
    },
    dateToEnd: {
        type: String,
        required: false,
    },
    tasks: [{
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "Task"
        }
    }]
}, {
    timestamps: true
})

export default mongoose.model("Challenge", challengeSchema)