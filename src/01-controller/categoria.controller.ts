import { NextFunction, Response, Request } from "express";
import CategoriaService from "../02-service/categoria.service";

export default class CategoriaController
{
    public save(req: Request, res: Response, next: NextFunction)
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

    public test(req: Request, res: Response, next: NextFunction)
    {
        res.send("Teste!");
    }
}