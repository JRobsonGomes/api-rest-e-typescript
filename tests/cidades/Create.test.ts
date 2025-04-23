import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {
  it('Cria um registro', async () => {
    const res1 = await testServer.post('/cidades').send({
      nome: 'São Paulo',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Não deve criar um registro com o campo nome abaixo de 3 caracteres', async () => {
    const res1 = await testServer.post('/cidades').send({
      nome: 'Sã',
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });

  it('Deve criar um registro com o campo nome acima de 3 caracteres', async () => {
    const res1 = await testServer.post('/cidades').send({
      nome: 'São Paulo',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
});
