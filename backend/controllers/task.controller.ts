import { Request, Response } from 'express';
import Task from '../models/Task';

// GET  /api/tasks
export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

// POST /api/tasks
export async function createTask(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

// PUT  /api/tasks/:id
export async function editTask(req: Request, res: Response) {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

// DELETE /api/tasks/:id
export async function deleteTask(req: Request, res: Response) {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
