import { ObjectUserId, ObjectProducts } from '../types/typeValidation';

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

export interface IOrder {
  userId?: number,
  products: number[],
  idUser?: number
}
export interface Order extends IOrder {
  id: number,
}

export interface IOOrder {
  userId?: number,
  idUser?: number,
  products: number[]
}

export interface OOrder extends IOOrder {
  id: number,
}

export interface IOrderById {
  userId?: ObjectUserId[],
  row: ObjectProducts[]
}

export interface OrderById extends IOrderById {
  id: number,
}

export interface IOrderProducts {
  userId?: number,
  products: number[]
}

export interface OrderProducts extends IOrderProducts {
  id: number,
}