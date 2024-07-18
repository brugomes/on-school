# On-School

## Descrição
On-School é um projeto desenvolvido para facilitar a gestão e o acesso a recursos educacionais online. Utilizando uma base de dados PostgreSQL e um backend em Node.js com Fastify, o projeto visa oferecer uma plataforma robusta e eficiente para instituições de ensino.

## Começando
Para rodar o projeto localmente, siga estas instruções.

- Docker e Docker Compose
- Node.js (recomendado: versão 14 ou superior)
- npm ou yarn

## Instalação
1. Clone o repositório:
``` git clone https://github.com/melovivi/on-school.git```
```cd on-school ```

2. Inicie o banco de dados PostgreSQL usando Docker Compose:
```docker-compose up -d```

3. Instale as dependências do projeto:
```npm install```
ou
```yarn install```

4. Execute as migrações do banco de dados (ajuste os comandos conforme necessário):
```npm run typeorm migration:run```

5. Inicie o servidor de desenvolvimento:
```npm run start:dev```

## Uso
Após iniciar o servidor, a API estará disponível em http://localhost:3002.

## Construção
Para construir o projeto para produção, execute:
```npm run build```

Isso compilará o TypeScript para JavaScript no diretório build.

