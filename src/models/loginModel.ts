import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Login, ILogin } from '../interfaces/loginInterface';

const create = async ({ username, password }: ILogin): Promise<Login> => {
  const query = 'INSERT INTO Users (username, classe, level, password ) VALUES (?, ?, ?, ?)';
  const [rowResult] = await connection.execute<ResultSetHeader>(
    query,
    [username, password],
  );
  console.log({ rowResult });

  // Usando o ResultSetHeader, eu consigo desistruturar o insertId de rowResult
  const { insertId: id } = rowResult;

  return { id, username, password };
};

export default {
  create,
};