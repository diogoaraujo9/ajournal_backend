import * as express from 'express';
import { DailyLog } from './model/dailyLog.model';
import { dailyLogRepository } from '../03-repository/dailyLog.repository';

export default class DailyService
{
    public async save(_dailyLog: DailyLog): Promise<DailyLog>
    {
        try 
        {
            const savedDailyLog = await dailyLogRepository.save(_dailyLog);
            
            return savedDailyLog;
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
            const savedDailyLog = await dailyLogRepository.remove(_dailyLog);
            
            return savedDailyLog;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    public async getDaily(_dataInicio: String, _dataFim: String): Promise<DailyLog>
    {
        try 
        {
            const dataInicio = _dataInicio;
            const dataFim = _dataFim;

            const query = await dailyLogRepository.getDaily(dataInicio, dataFim);
            
            return query;
        } 
        catch (error) 
        {
            throw error;
        }
    }
    
}
