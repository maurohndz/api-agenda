import { type Request, type Response, type NextFunction } from 'express';
import { ControllerFunc } from '@Types/server.type';
import BuildResponse from '@Tools/BuildResponse';
import BuildError from '@Tools/BuildError';

export const commonController =
  (controller: ControllerFunc) =>
  async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(controller(req, res, next))
      .then((value: BuildResponse) => {
        const info = value.getResponse();

        res.status(info.code).send(info);
      })
      .catch((error: BuildError) => {
        res.status(error.statusCode).send({
          code: error.statusCode,
          message: error.message,
          data: null
        })
      });
  };
