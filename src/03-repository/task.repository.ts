import { Task } from "../02-service/model/task.model";

let TaskModel = require('../04-infra/models/task');

class TaskRepository
{
    public async save(_task: Task): Promise<Task>
    {
        try 
        {
            let taskModel = new TaskModel(_task);
            const savedTask = await taskModel.save(_task);
    
            return savedTask;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

export const taskRepository = new TaskRepository();