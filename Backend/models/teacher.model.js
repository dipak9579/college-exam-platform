import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  department: {
    type: String, // e.g., "Computer Science"
    required: true,
  },
  subjects: {
    type: [String], // e.g., ["Data Structures", "Operating Systems"]
  },
  examsCreated: [
    {
      examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
      },
    },
  ],
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
