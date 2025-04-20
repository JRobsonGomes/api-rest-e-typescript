import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  nome: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required('Nome is required').min(3),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: yupError.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json({
    message: 'Cidades created successfully',
    data: validatedData,
  });
};
