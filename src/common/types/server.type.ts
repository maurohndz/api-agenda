import { type Request, type Response, type NextFunction } from 'express';

export type ControllerFunc = (
  req: Request,
) => Promise<any|boolean>;
