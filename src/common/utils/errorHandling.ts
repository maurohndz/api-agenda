import CommonError from "@Tools/BuildError";
import { Request, Response } from "express";

export const errorHandling = () => async (err: CommonError, req: Request, res: Response) => {
  console.log('holaaaaaaaaaaa')
  res.send('Error');
}
