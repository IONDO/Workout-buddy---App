const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  activity: { type: String },
  meetingpoint: { type: String, unique: true },
  dateTime: { type: Date },
  duration: { type: Number },
  attendees: [{ type: Schema.ObjectId, ref: 'User' }],
  comment: { type: String, required: true },
  creatorPicture: { type: String },
  creatorName: { type: String },
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
