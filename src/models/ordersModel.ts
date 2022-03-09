import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrder, OrderById, IOrderGetAll } from '../interfaces/interfaces';

const create = async ({ idUser, products }: IOrder): Promise<IOrder> => {
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

const getById = async (id: number) => {
  const query = 'SELECT * FROM Trybesmith.Orders WHERE id = ?';
  const [userId] = await connection.execute(query, [id]);
  // console.log({ userId });

  const query2 = `SELECT
  P.id AS products
  FROM Trybesmith.Orders AS O
  INNER JOIN Trybesmith.Products AS P
  ON O.id = P.orderId
  WHERE O.id = ?
  ORDER BY P.orderId
  `;

  //   const query = `SELECT
  //   O.id,
  //   O.userId,
  //   P.id AS products
  // FROM Trybesmith.Orders AS O
  // INNER JOIN Trybesmith.Products AS P
  //   ON O.id = P.orderId
  //   WHERE O.id = ?
  // ORDER BY P.orderId
  // `;

  const [row] = await connection.execute(query2, [id]);
  return { id, userId, row } as unknown as OrderById;
};

const getAll = async () => {
  // const query = 'SELECT * FROM Trybesmith.Orders';
  // const [userId] = await connection.execute(query);
  // console.log({ userId });

  // const query2 = `SELECT
  // P.id AS products
  // FROM Trybesmith.Orders AS O
  // INNER JOIN Trybesmith.Products AS P
  // ON O.id = P.orderId
  // ORDER BY P.orderId
  // `;

  const query = `SELECT
    O.id,
    O.userId,
    P.id AS products
  FROM Trybesmith.Orders AS O
  INNER JOIN Trybesmith.Products AS P
    ON O.id = P.orderId
  GROUP BY O.id, P.id
  `;

  const [row] = await connection.execute(query);
  console.log({ row });
  
  return { row } as unknown as IOrderGetAll;
};

export default {
  create,
  getById,
  getAll,
};