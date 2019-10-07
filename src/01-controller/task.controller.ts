import { NextFunction, Response, Request } from "express";
import TaskService from "../02-service/task.service";

export default class TaskController
{
    public save(req: Request, res: Response, next: NextFunction)
    {
        let taskService: TaskService = new TaskService();
        try
        {
            var body = req.body;

            taskService.save(body)
                .then(function(item)
                {
                    res.status(200).json(item);
                })
                .catch(function(err)
                {
                    res.status(400).json(err);
                });
        }
        catch(err)
        {
            res.status(400).json(err);
        }
    }
}