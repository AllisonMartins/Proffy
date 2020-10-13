import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
//PUT: atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação
// localhost:3333

app.use(routes);

app.listen(3333);
