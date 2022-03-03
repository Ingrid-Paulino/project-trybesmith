import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, IProduct } from '../interfaces/interfaces';

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return rows as Product[];
};

const create = async ({ name, amount }: IProduct): Promise<Product> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount)'
   + 'VALUES (?, ?)';
  
  const [rowResult] = await connection.execute<ResultSetHeader>(
    query,
    [name, amount],
  );
  // console.log({ rowResult });

  // Usando o ResultSetHeader, eu consigo desistruturar o insertId de rowResult
  const { insertId: id } = rowResult;
  return { id, name, amount };
};

// const update = async ({ products }: IProducts): Promise<Products> => {
//   const updateProduct = products.map(async (produto) => {
//     const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
//     await connection.execute(query2, [id, produto])

//   })

// };

export default {
  create,
  getAll,
  // update,
};