import { type Request, type Response, type NextFunction } from 'express';
import { ControllerFunc } from '@Types/server.type';

export const commonController = (controller: ControllerFunc) => async (req: Request, res: Response) => {
  Promise.resolve(controller(req))
    .then((value) => {
      res.send(value);
    })
    .catch((error) => {
      res.status(500).send(error);
  });
};
