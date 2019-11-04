import { Categoria } from "./categoria.model";

export class DailyLog
{
    _id?: any;
    data: string;
    tipo: string;
    tarefaCompleta: boolean;
    descricao: string;
    key: string;
    categoria: Categoria;
}