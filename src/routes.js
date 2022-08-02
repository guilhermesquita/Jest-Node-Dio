import { Router } from "express";
const routes = Router();

const database = [
    {nome: "Lucas", idade: 12},
    {nome: "Geovane", idade: 14}
];

routes.get('/', (req, res)=>{
    return res.status(200).json(database)
})

routes.post('/', (req, res)=> {
    const { nome, idade } = req.body;
    database.push(nome, idade);
    return res.status(201).json({'mensagem': `usuario ${nome} criado com ${idade} anos`})
})

export {routes};
