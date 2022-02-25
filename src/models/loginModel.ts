// import { ResultSetHeader } from 'mysql2';
// import connection from './connection';
// import { Login, ILogin } from '../interfaces/loginInterface';

// const create = async ({ username, password }: ILogin): Promise<Login> => {
//   console.log('oi3');
  
//   const query = 'INSERT INTO Trybesmith.Users (username, password )' 
//   + 'VALUES (?, ?)';
//   const [rowResult] = await connection.execute<ResultSetHeader>(
//     query,
//     [username, password],
//   );
//   console.log({ rowResult });

//   // Usando o ResultSetHeader, eu consigo desistruturar o insertId de rowResult
//   const { insertId: id } = rowResult;

//   return { id, username, password };
// };

// export default {
//   create,
// };