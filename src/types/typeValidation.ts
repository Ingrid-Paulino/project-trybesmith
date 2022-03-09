export type Validation = null | string | number | boolean | object | Array<Validation>; 

export type Token = string;

export type Payload = {
  id: number,
  username: string,
};

export type Secret = string;

export type JwtConfig = {
  expiresIn: string,
  algorithm: string,
};

export type DecodeData = {
  data: {
    id: number,
    username: string,
  }
};

export type ObjectUserId = {
  userId: number
};

export type ObjectProducts = {
  products: number
};

export type AA = string & number;

export type ObjOrderProducts = {
  id: number,
  userId: number,
  products: number[]
};

export type Test = {
  id: number,
  userId: number,
  products: number
};