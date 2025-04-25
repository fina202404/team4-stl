import express from 'express';
import {
  getTasks,
  createTask,
  editTask,
  deleteTask
} from '../controllers/task.controller';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;
