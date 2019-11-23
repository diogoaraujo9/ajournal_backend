import { NextFunction, Response, Request } from "express";
import CategoriaService from "../02-service/categoria.service";

export default class CategoriaController
{
    public save(req: any, res: Response, next: NextFunction)
    {
        let categoriaService: CategoriaService = new CategoriaService();
        try
        {
            var body = req.body; 
            const userId = req.user.sub;
            body.userId = userId;

            categoriaService.save(body, body._id)
                .then(function(categoria)
                {
                    res.status(200).json(categoria);
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
        let categoriaService: CategoriaService = new CategoriaService();
        try
        {
            var body = req.body; 

            categoriaService.save(body,body._id)
                .then(function(categoria)
                {
                    res.status(200).json(categoria);
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

    public getCategories(req: any, res: Response, next: NextFunction)
    {
        let categoriaService: CategoriaService = new CategoriaService();
        try
        {
            const userId = req.user.sub;

            categoriaService.getCategories(userId)
            .then(function(categories)
            {
                res.status(200).json(categories);
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