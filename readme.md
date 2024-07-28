# On-School

## Descrição
On-School é um projeto desenvolvido para facilitar a gestão e o acesso a recursos educacionais online. Utilizando uma base de dados PostgreSQL e um backend em Node.js com Fastify, o projeto visa oferecer uma plataforma robusta e eficiente para instituições de ensino.

## Começando
Para rodar o projeto localmente, siga estas instruções.
Você precisará ter disponível em sua máquina:

- Docker e Docker Compose
- Node.js (recomendado: versão 14 ou superior)
- npm ou yarn

## Instalação
1. Clone o repositório:
``` git clone https://github.com/melovivi/on-school.git```
```cd on-school ```

2. Inicie o banco de dados PostgreSQL usando Docker Compose:
Abra o projeto na raiz ```cd on-school``` e vá até a pasta docker via terminal ```cd docker```
Então, use o docker compose:
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

## Usando os endpoints
Temos em nossa aplicação disponíveis os seguintes métodos referentes aos usuários:
- Create
- Sign In

E os seguintes métodos para postagens:
- Create
- Update
- Delete
- Find
- Search

Em nosso projeto temos, dentro da pasta repositories > typeorm > mocks, alguns exemplos (mocks) de como os dados são estruturados na aplicação.

## Relatos e Experiências
O processo de desenvolvimento desse projeto foi uma grande experiência de aprendizagem, utilizamos frameworks que não estávamos habituados a utilizar, o que nos gerou uma curva de aprendizado para conseguir concluir a atividade. Realizamos reuniões de grupo no Discord para desenvolvermos juntos e, aqueles que já estavam mais habituados a esse estilo de backend, ajudarem os que não estavam. Algumas reuniões depois, decidimos participar de uma sessão tira-dúvidas com o professor, pois tivemos dificuldades na parte de testes unitários, mais especificamente para gerar os dados para teste e conseguir rodar os testes sem erro. Após o professor nos orientar e após várias tentativas e erros, conseguimos chegar em um resultado que consideramos satisfatório. Assim, concluímos a atividade.
