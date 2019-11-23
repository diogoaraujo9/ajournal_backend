import * as express from 'express';
import { Categoria } from './model/categoria.model';
import { categoriaRepository } from '../03-repository/categoria.repository';

export default class CategoriaService
{
    public async save(_categoria: Categoria, _id: String): Promise<Categoria>
    {
        try 
        {
            const savedCategoria = await categoriaRepository.save(_categoria, _id);
            
            return savedCategoria;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    public async remove(_id: any): Promise<Categoria>
    {
        try 
        {
            const savedCategoria = await categoriaRepository.remove(_id);
            
            return savedCategoria;
        } 
        catch (error) 
        {
            throw error;
        }
    }

    public async getCategories( _userId: string): Promise<Categoria>
    {
        try 
        {
            const categories = await categoriaRepository.getCategories(_userId);
            
            return categories;
        } 
        catch (error) 
        {
            throw error;
        }
    }
}
