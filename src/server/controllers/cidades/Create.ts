import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
  nome: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  return res.status(StatusCodes.CREATED).json({
    message: 'Cidades created successfully',
    data: req.body,
  });
};
