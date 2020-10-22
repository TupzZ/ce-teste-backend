# CE Test - Web Server

## Running the server

Run `npm start` or `yarn start` to run the server on `http://localhost:3000/`. The server will **not** automatically reload if you change any of the source files.

# Rotas

## GET users

Rota GET `/get-users` para receber todas as informações dos clientes.

## GET opportunities

Rota GET `/get-opportunities` para receber todas as informações das oportunidades dos clientes.

## GET user/email

Rota GET `/get-user/:email` para receber todas as informações de um cliente específico.

## PATCH opportunity/email/id

Rota PATCH `/set-opportunity/:email/:id` para alterar o status de uma oportunidade.
