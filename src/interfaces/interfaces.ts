export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number
}

export interface ILogin {
  username: string,
  password: string,
}
  
export interface Login extends ILogin {
  id: number
}

export interface IProduct {
  name: string,
  amount: string,
}

export interface Product extends IProduct {
  id: number,
}

export interface IProducts {
  userId?: number,
  products: number[],
  idUser?: number
}

export interface Products extends IProducts {
  id: number,
}