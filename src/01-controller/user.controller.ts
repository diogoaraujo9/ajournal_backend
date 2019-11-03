import { NextFunction, Response, Request } from "express";
import UserService from "../02-service/user.service";

export default class UserController
{
    public save(req: Request, res: Response, next: NextFunction)
    {
        let userService: UserService = new UserService();
        try
        {
            var body = req.body; 

            userService.save(body,body._id)
                .then(function(user)
                {
                    res.status(200).json(user);
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

    public authenticate(req: Request, res: Response, next: NextFunction)
    {
        let userService: UserService = new UserService();
        userService.authenticate(req.body)
            .then(function (response:any) {
                if (response) {
                    // authentication successful
                    res.send({ userId: response._id, token: response.token });
                } else {
                    // authentication failed
                    res.status(401).send('Username or password is incorrect');
                }
            })
            .catch(function (err) {
                res.status(400).send(err);
            });
    }

    public remove(req: Request, res: Response, next: NextFunction)
    {
        let userService: UserService = new UserService();
        try
        {
            var body = req.body; 

            userService.save(body,body._id)
                .then(function(user)
                {
                    res.status(200).json(user);
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