import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { ICidade } from '../../database/models';

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      id: yup.number().optional(),
      nome: yup.string().required().min(3).max(50),
    })
  ),
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const { body } = req;
  console.log(body);

  return res.status(StatusCodes.CREATED).json(1);
};
