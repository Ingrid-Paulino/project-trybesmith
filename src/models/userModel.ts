import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, IUser } from '../interfaces/userInterface';

// Promise<User> --> Essa função me retorna uma promise com User
const create = async ({ username, classe, level, password }: IUser): Promise<User> => {
  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password )'
   + 'VALUES (?, ?, ?, ?)';
  const [rowResult] = await connection.execute<ResultSetHeader>(
    query,
    [username, classe, level, password],
  );
  console.log({ rowResult });

  // Usando o ResultSetHeader, eu consigo desistruturar o insertId de rowResult
  const { insertId: id } = rowResult;

  return { id, username, classe, level, password };
};

export default {
  create,
};