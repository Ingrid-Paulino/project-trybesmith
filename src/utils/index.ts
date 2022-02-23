import Error from '../interfaces/errorInterface';

const validateErrorObj = (status: Error, message : Error) => ({
  status,
  message,
});

export default validateErrorObj;