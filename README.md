# Trybesmith Project

## Desenvolvido
Desenvolvi um **CRUD** (_Create, Read, Update_ e _Delete_) de itens medievais, no formato de uma _API_, utilizando _Typescript_.
Criei alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

## Desenvolvimento
Desenvolvi todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) em meu código, e por meio dessa aplicação, foi possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`).

---
## Tecnologias e ferramentas:
 - NodeJS
 - TypeScript
 - JWT
 - Express
 - joi
 - mysql2
 - nodemon

## Como instalar e configurar:
  1. Primeiro instale as dependencias:
     ```
     npm install
     ```
    
  2. Crie o banco executando o arquivo Trybesmith.sql que esta na raiz do projeto.
  3. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
     ```
      MYSQL_HOST=seuhost
      MYSQL_USER=seuUsuario
      MYSQL_PASSWORD=suaSenha
      MYSQL_BD=Trybesmith
     ```
  4. Rode o projeto:
      ```
        npm dev
      ```

      ou

      ```
        npm start
      ```
