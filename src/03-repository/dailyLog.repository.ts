import { DailyLog } from "../02-service/model/dailyLog.model";

let DailyModel = require('../04-infra/models/dailyLog');

class DailyLogRepository
{
    public async save(_dailyLog: DailyLog): Promise<DailyLog>
    {
        let savedDaily = new DailyLog();
        try 
        {
            let dailyModel = new DailyModel(_dailyLog);
            if(_dailyLog._id != null){
                savedDaily = await dailyModel.update(_dailyLog);
            }
            else{                
                savedDaily = await dailyModel.save(_dailyLog);
            }
    
            return savedDaily;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    public async remove(_dailyLog: DailyLog): Promise<DailyLog>
    {
        try 
        {
            let dailyModel = new DailyModel(_dailyLog);
            const daily = await dailyModel.remove({id:_dailyLog._id});
    
            return daily.deletedCount;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    
    public async getDaily(dataInicio: String, dataFim: String): Promise<DailyLog>
    {
        try 
        {
            const query = await DailyModel.where('data').gte(dataInicio).lte(dataFim);
    
            return query;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

export const dailyLogRepository = new DailyLogRepository();