const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: ()=> new Date(),

    },
    exercises: [{
        type: {
            type: String,
            required: "You must enter a type of exercise."
        },
        name: {
            type: String,
            required: "What's the name of the exercise?"
        },
        duration: {
            type: Number,
            required: "How long are you lifting this for?"
        },
        weight: {
            type: Number,
            required: "How much weight did you lift?"
        },
        reps: {
            type: Number,
            required: "How many reps did you do?"
        },
        sets: {
            type: Number,
            required: "How many sets did you do?"
        },
        distance: {
            type: Number,
        }
    }]
})
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout