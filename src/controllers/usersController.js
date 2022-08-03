import { database } from "../database.js";

const usersControllers = {
    criarUsuario(req, res){
        const { nome, idade } = req.body;
    
        if(nome.length < 1){
            return response.status(403).json({mensagem: "Não foi possível criar o usuário sem nome"})
        }

        if(idade < 1){
            return response.status(403).json({mensagem: "Não foi possível criar o usuário sem idade"})
        }
    
        database.push(nome, idade);
        return res.status(201).json({'mensagem': `usuario ${nome} criado com ${idade} anos`})
    },

    listarUsuario(req, res){
        return res.status(200).json(database);
    }

}

export {usersControllers}