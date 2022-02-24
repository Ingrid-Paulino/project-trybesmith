export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export enum MSG {
  POST_NOT_FOUND = 'Post no found',
  TOKEN_NOT_FOUND = 'Token not found',

  NOT_CREATE_USER = 'User not created',
  USER_CREATED = 'User created',

  NOT_USERNAME = 'Username is required',
  USERNAME_NOT_STRING = 'Username must be a string',
  USERNAME_SHORT = 'Username must be longer than 2 characters',
 
  NOT_CLASSE = 'Classe is required',
  CLASSE_NOT_STRING = 'Classe must be a string',
  CLASSE_SHORT = 'Classe must be longer than 2 characters',

  NOT_LEVEL = 'Level is required',
  LEVEL_NOT_NUMBER = 'Level must be a number',
  LEVEL_NOT_RIGTH = 'Level must be greater than 0',

  NOT_PASSWORD = 'Password is required',
  PASSWORD_NOT_STRING = 'Password must be a string',
  PASSWORD_SHORT = 'Password must be longer than 7 characters',

}