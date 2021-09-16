const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: {
      type: String,
      trim: true,
      required: 'Please enter a type for this exercise.'
    },
    name: {
      type: String,
      trim: true,
      required: 'Please enter a name for the exercise.'
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };
