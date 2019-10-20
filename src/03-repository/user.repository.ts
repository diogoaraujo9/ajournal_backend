import { User } from "../02-service/model/user.model";

let UserModel = require('../04-infra/models/user');

class UserRepository
{
    public async save(_user: User, _id: String): Promise<User>
    {
        let savedUser = new User();
        try 
        {
            let userModel = new UserModel(_user);
            if(_user._id != null){
                savedUser = await userModel.update(_user);
            }
            else{                
                savedUser = await userModel.save(_user);
            }
    
            return savedUser;
        }
        catch (error) 
        {
            throw error;
        }
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