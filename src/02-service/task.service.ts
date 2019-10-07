import * as express from 'express';
import { Task } from './model/task.model';
import { taskRepository } from '../03-repository/task.repository';

export default class TaskService
{
    public async save(_task: Task): Promise<Task>
    {
        try 
        {
            const savedTask = await taskRepository.save(_task);
            
            return savedTask;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}