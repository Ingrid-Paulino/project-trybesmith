export type Validation = null | string | number | boolean | object | Array<Validation>; 

export type Token = string;

export type Payload = {
  id: number,
  username: string,
};

export type Secret = string;