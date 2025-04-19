# API Rest com Node.js e TypeScript

Este é um projeto de exemplo de uma API Rest desenvolvida com Node.js e TypeScript.

## Pré-requisitos

- Node v20.19.0 (recomendado)
- Yarn instalado

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd api-rest-e-typescript
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

## Scripts

- Iniciar o projeto:
  ```bash
  yarn init
  ```

- Adicionar dependências:
  ```bash
  yarn add express
  ```

- Adicionar dependências de desenvolvimento:
  ```bash
  yarn add -D typescript @types/express ts-node-dev
  ```

- Rodar o projeto:
  ```bash
  ts-node-dev ./src/index.ts
  ```
  or
  ```bash
  yarn ts-node-dev ./src/index.ts
  ```
- Outras dependencias
  ```bash
  yarn add http-status-codes
  ```
## Configuração
- Eslint
```bash
npm init @eslint/config
```
## Endpoints

- `GET /`: Retorna "Hello, World!".

## Licença

Este projeto está licenciado sob a licença MIT.