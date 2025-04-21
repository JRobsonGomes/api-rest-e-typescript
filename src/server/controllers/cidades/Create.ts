import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';

interface ICidade {
  nome: string;
  estado: string;
}
interface IFilter {
  filter?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3).max(50),
    estado: yup.string().required().min(2),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().optional().min(2),
  })),
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  const { body } = req;
  return res.status(StatusCodes.CREATED).json({
    message: 'Cidades created successfully',
    data: body,
  });
};
