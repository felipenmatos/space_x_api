## Introdução:

O projeto consiste em um desenvolvimento do aplicativo Web e Mobile CLIMATEMPO, onde é possível efetuar o login e pesquisar o clima em determinada região, com regra de autocomplete e renderização de cards com detalhamento do tempo por data. O projeto em si tem como baixa/média escalabilidade no qual foi adaptado a algumas práticas de Clean Code para otimizar o resultado.

## Deploy do Projeto Front: https://meteorology-app.netlify.app/

## Deploy da API : https://api-weather-search.herokuapp.com/locales

## Imagem da arquitetura desenvolvida no MIRO:

![Arquitetura](https://user-images.githubusercontent.com/82072640/204061541-b9326671-a8ad-4040-b481-665d93ffe2b4.jpg)

## Inicialização do Projeto:

Inicialização pelo Docker criando a imagem ou utilizando o nodemon, basta dar o npm install e startar.

## Rotas 

GET / = https://spacex-coodesh.herokuapp.com/

GET /launches = https://spacex-coodesh.herokuapp.com/launches

GET /status = https://spacex-coodesh.herokuapp.com/launches/status

Swagger /docs = https://spacex-coodesh.herokuapp.com/docs/

# Desenvolvimento:

O projeto teve como arquitetura de desenvolvimento, NodeJs + Express, no qual foi desenvolvido o servidor se comunicando com o reteador que tem seus respectivos endoints validado com os controladores, onde estar inseridos todas as funções e tratamentos.
O banco de dados foi desenvolvido utilizando o MongoDB, passando informações necessárias através de um JSON e se conectando com o projeto atráves do arquivo data.js

# Swagger: 

[swagger.webm](https://user-images.githubusercontent.com/82072640/204068064-3f4cd45c-2fa8-4d52-8581-8a6da889439e.webm)

# Imagens de resposta da API

![GetFullStack](https://user-images.githubusercontent.com/82072640/204062485-59a18249-ccb4-4a73-98e6-b23273b16463.jpg)
![GetLaunches](https://user-images.githubusercontent.com/82072640/204062487-2a4282ee-fb5c-435c-a957-0c940cb580ef.jpg)
![GetStatus](https://user-images.githubusercontent.com/82072640/204062491-701303c5-3870-47d4-a3c3-750840a019c0.jpg)
