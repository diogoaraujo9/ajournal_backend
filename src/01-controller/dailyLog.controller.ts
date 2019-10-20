import { NextFunction, Response, Request } from "express";
import DailyService from "../02-service/dailyLog.service";

export default class DailyLogController
{
    public save(req: Request, res: Response, next: NextFunction)
    {
        let dailyService: DailyService = new DailyService();
        try
        {
            var body = req.body; 

            dailyService.save(body)
                .then(function(dailyLog)
                {
                    res.status(200).json(dailyLog);
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

    public test(req: Request, res: Response, next: NextFunction)
    {
        res.send("Teste!");
    }
}