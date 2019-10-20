import * as express from 'express';
import { User } from './model/user.model';
import { userRepository } from '../03-repository/user.repository';

export default class UserService
{
    public async save(_user: User, _id: String): Promise<User>
    {
        try 
        {
            const savedUser = await userRepository.save(_user, _id);
            
            return savedUser;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    public async remove(_id: any): Promise<User>
    {
        try 
        {
            const savedUser = await userRepository.remove(_id);
            
            return savedUser;
        } 
        catch (error) 
        {
            throw error;
        }
    }

        
    /*public async authenticate(username: String, password: String): Promise<User>
    {
        
        try 
        {
            const savedUser = await userRepository.remove(_id);
            
            return savedUser;
        } 
        catch (error) 
        {
            throw error;
        }
    }*/
}
