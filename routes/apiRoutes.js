const app = require("express").Router()
const Workout = require("../models/workoutSchema.js")

app.post("/api/workouts",(req,res)=>{
    Workout.create({})
    .then(dbWorkout=>{
        res.json(dbWorkout)
    }) .catch((err)=>{
        res.json(err)
    })
})
app.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(8)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = app