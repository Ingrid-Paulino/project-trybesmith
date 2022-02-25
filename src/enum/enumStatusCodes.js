"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSG = exports.StatusCodes = void 0;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["CONFLICT"] = 409] = "CONFLICT";
    StatusCodes[StatusCodes["UNPROCCESSABLE_ENTITY"] = 422] = "UNPROCCESSABLE_ENTITY";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
var MSG;
(function (MSG) {
    MSG["POST_NOT_FOUND"] = "Post no found";
    MSG["TOKEN_NOT_FOUND"] = "Token not found";
    MSG["NOT_CREATE_USER"] = "User not created";
    MSG["USER_CREATED"] = "User created";
    MSG["NOT_USERNAME"] = "Username is required";
    MSG["USERNAME_NOT_STRING"] = "Username must be a string";
    MSG["USERNAME_SHORT"] = "Username must be longer than 2 characters";
    MSG["NOT_CLASSE"] = "Classe is required";
    MSG["CLASSE_NOT_STRING"] = "Classe must be a string";
    MSG["CLASSE_SHORT"] = "Classe must be longer than 2 characters";
    MSG["NOT_LEVEL"] = "Level is required";
    MSG["LEVEL_NOT_NUMBER"] = "Level must be a number";
    MSG["LEVEL_NOT_RIGTH"] = "Level must be greater than 0";
    MSG["NOT_PASSWORD"] = "Password is required";
    MSG["PASSWORD_NOT_STRING"] = "Password must be a string";
    MSG["PASSWORD_SHORT"] = "Password must be longer than 7 characters";
})(MSG = exports.MSG || (exports.MSG = {}));