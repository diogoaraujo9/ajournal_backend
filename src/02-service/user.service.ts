import * as express from 'express';
import { User } from './model/user.model';
import { userRepository } from '../03-repository/user.repository';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import Q from 'q';
import jwt from 'jsonwebtoken';
import config from '../config.json';
//var config = require('../../config.json');
let UserModel = require('../04-infra/models/user');

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

    public async authenticate(_user: User)
    {
        try 
        {
            //let authUser = await userRepository.authenticate(_user);
            var deferred = Q.defer();
            
            let authUser = new UserModel(_user);
            
            authUser = await UserModel.findOne({usuario:_user.usuario})      

            if (_user && bcrypt.compareSync(_user.senha, authUser.hash)) {
                // authentication successful
                deferred.resolve({token :jwt.sign({ sub: authUser._id }, config.secret), userId: authUser._id});
            } else {
                // authentication failed
                deferred.resolve();
            }

        return deferred.promise;
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
