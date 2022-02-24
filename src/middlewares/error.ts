import { ErrorRequestHandler } from 'express';

const errorMiddlewate: ErrorRequestHandler = (err, _req, res, _next) => {
//  console.error('err', err);

  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  // if ('status' in err) {
  //   return res.status(err.status).send({ message: err.message });
  // }

  return res.status(500).json({
    error: { message: err.message,
    },
  });
};

export default errorMiddlewate;