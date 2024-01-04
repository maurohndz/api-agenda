import { type Request, type Response, type NextFunction } from 'express';
import BuildResponse from '@Tools/BuildResponse';

export type ControllerFunc = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<BuildResponse>;
