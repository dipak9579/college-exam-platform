import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  class: {
    type: String, // e.g., "Computer Science 2024"
    required: true,
  },
  rollNumber: {
    type: String,
    unique: true,
    required: true,
  },
  examsTaken: [
    {
      examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
      },
      marksObtained: {
        type: Number,
      },
      status: {
        type: String,
        enum: ['completed', 'in-progress'],
      },
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);
export default Student;