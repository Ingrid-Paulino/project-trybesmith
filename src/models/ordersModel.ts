import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts } from '../interfaces/interfaces';

const create = async ({ idUser, products }: IProducts): Promise<IProducts> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) '
   + 'VALUES (?)';
  
  const [rowResult] = await connection.execute<ResultSetHeader>(
    query,
    [idUser],
  );

  // console.log({ rowResult });
  // Usando o ResultSetHeader, eu consigo desistruturar o insertId de rowResult
  const { insertId: id } = rowResult;
  const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

  await Promise.all(products.map(async (produto) => {
    await connection.execute(query2, [id, produto]);
  }));

  return { userId: idUser, products };
};

export default {
  create,
};