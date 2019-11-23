import { Categoria } from "../02-service/model/categoria.model";

let CategoriaModel = require('../04-infra/models/categoria');

class CategoriaRepository
{
    public async save(_categoria: Categoria, _id: String): Promise<Categoria>
    {
        
        let savedCategoria = new Categoria();
        try 
        {
            let categoriaModel = new CategoriaModel(_categoria);
            if(_categoria._id != null){
                savedCategoria = await categoriaModel.update(_categoria);
            }
            else{                
                savedCategoria = await categoriaModel.save(_categoria);
            }
    
            return savedCategoria;
        }
        catch (error) 
        {
            throw error;
        }
    }

    public async remove(_categoria: Categoria): Promise<Categoria>
    {
        try 
        {
            let categoriaModel = new CategoriaModel(_categoria._id);
            const deletedCategoria = await categoriaModel.remove(_categoria._id);
    
            return deletedCategoria;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    public async getCategories(_userId: string): Promise<Categoria>
    {
        try 
        {
            const query = {
                userId: _userId
            };

            const dailyLogs = await CategoriaModel.find(query);
    
            return dailyLogs;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

export const categoriaRepository = new CategoriaRepository();