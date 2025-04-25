import mongoose from 'mongoose';

// Define the shape of a Task
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create the model from the schema
const Task = mongoose.model('Task', TaskSchema);

export default Task;
