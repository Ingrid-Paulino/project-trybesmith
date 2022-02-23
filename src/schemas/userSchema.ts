import Joi from 'joi';

const UserSchema = Joi.object({
  userName: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  level: Joi.number().required(),
});

export default UserSchema;