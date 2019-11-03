import { User } from "../02-service/model/user.model";
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import Q from 'q';
import jwt from 'jsonwebtoken';
//import config from 'config.json';

let UserModel = require('../04-infra/models/user');

class UserRepository
{
    public async save(_user: User, _id: String): Promise<User>
    {
        let savedUser = new User();
        try 
        {
            // adiciona uma senha hash ao objeto
            _user.hash = bcrypt.hashSync(_user.senha, 10);
            // Omite a senha do objeto            
            let user = _.omit(_user, 'senha');

            let userModel = new UserModel(user);
            
            if(_user._id != null){
                savedUser = await userModel.update(_user);
            }
            else{                
                savedUser = await userModel.save(user);
            }
    
            return savedUser;
        }
        catch (error) 
        {
            throw error;
        }
    }

    
    public async authenticate(_user: User) {
        var deferred = Q.defer();
        
        let authUser = new UserModel(_user);
        
        authUser = await UserModel.findOne({usuario:_user.usuario})      

            if (_user && bcrypt.compareSync(_user.senha, authUser.hash)) {
                // authentication successful
                deferred.resolve({token :jwt.sign({ sub: authUser._id }, 'API SECRET'), userId: authUser._id});
            } else {
                // authentication failed
                deferred.resolve();
            }

        return deferred.promise;
        
    }

    public async remove(_user: User): Promise<User>
    {
        try 
        {
            let userModel = new UserModel(_user._id);
            const deletedUser = await userModel.remove(_user._id);
    
            return deletedUser;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

export const userRepository = new UserRepository();