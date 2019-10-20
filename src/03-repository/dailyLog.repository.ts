import { DailyLog } from "../02-service/model/dailyLog.model";

let DailyModel = require('../04-infra/models/dailyLog');

class DailyLogRepository
{
    public async save(_dailyLog: DailyLog): Promise<DailyLog>
    {
        try 
        {
            let dailyModel = new DailyModel(_dailyLog);
            const savedDaily = await dailyModel.save(_dailyLog);
    
            return savedDaily;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

export const dailyLogRepository = new DailyLogRepository();