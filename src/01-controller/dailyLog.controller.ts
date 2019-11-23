import { NextFunction, Response, Request } from "express";
import DailyService from "../02-service/dailyLog.service";

export default class DailyLogController
{
    public save(req: any, res: Response, next: NextFunction)
    {
        let dailyService: DailyService = new DailyService();
        try
        {
            var body = req.body; 
            body.userId = req.user.sub;

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

    public remove(req: Request, res: Response, next: NextFunction)
    {
        let dailyService: DailyService = new DailyService();
        try
        {
            var body = req.body; 

            dailyService.remove(body)
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

    public getDailyWeek(req: any, res: Response, next: NextFunction)
    {
        let dailyService: DailyService = new DailyService();
        try
        {
            var body = req.body; 
            const userId = req.user.sub;

            const inicio = new Date(body.data);

            let fim = new Date(body.data);
            fim.setDate(fim.getDate() + parseInt('7'));

            let dataInicio = inicio.toISOString().substring(0,10);
            let dataFim = fim.toISOString().substring(0,10);

            dailyService.getDaily(dataInicio, dataFim, userId)
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
    
    public getMonthlyLog(req: any, res: Response, next: NextFunction)
    {        
       
        try
        {
            var body = req.body; 
            const userId = req.user.sub;
            const inicio = new Date(body.data);
            let fim = new Date(body.data);
            let dataInicio = inicio.toISOString().substring(0,8) + '01';
            let dataFim = fim.toISOString().substring(0,8) + '31';
            let dailyService: DailyService = new DailyService();

            dailyService.getDaily(dataInicio, dataFim, userId)
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
    
    public getFutureLog(req: any, res: Response, next: NextFunction)
    {               
        try
        {
            var body = req.body; 
            const userId = req.user.sub;
            const inicio = new Date(body.data);
            let fim = new Date(body.data);
            let dataInicio = inicio.toISOString().substring(0,5) + '01-01';
            let dataFim = fim.toISOString().substring(0,5) + '12-31';
            let dailyService: DailyService = new DailyService();

            dailyService.getDaily(dataInicio, dataFim, userId)
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