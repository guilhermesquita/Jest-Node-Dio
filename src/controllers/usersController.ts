import { Request, Response } from "express";
import { database } from "../database";

export class UsersController{
    criarUsuario(req: Request, res:Response): Response{
        const { nome, idade } = req.body;
    
        if(nome.length < 1){
            return res.status(403).json({mensagem: "Não foi possível criar o usuário sem nome"})
        }

        if(!idade){
            return res.status(403).json({mensagem: "Não foi possível criar o usuário sem idade"})
        }
    
        database.push(nome, idade);
        return res.status(201).json({'mensagem': `usuario ${nome} criado com ${idade} anos`})
    }

    listarUsuario(req: Request, res:Response):Response{
        return res.status(200).json(database);
    }

}

