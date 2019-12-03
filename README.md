Projeto Front-end criado com React JS, importando uma biblioteca de estilo antd (https://ant.design).
o esqueleto do projeto foi criado com o intuito de deixar o projeto mais modularizado.

## Available Scripts

Neste projeto voce precisa instalar o yarn, para carregar todas as dependencias.
https://yarnpkg.com/pt-BR/docs/install#windows-stable instale o yarn na sua maquina de acordo com seu sistema operacional
Na pasta clonada do projeto execute o
comando: yarn install

Em seguida, execute o comando: yarn start
Esse abrira automaticamente o localhost para visualização da aplicação.

Caso nao abra automaticamente rode a aplicação em um navegador web abrindo no localhost
Use [http://localhost:3000](http://localhost:3000) para visualizar a aplicação no navegador.


Projeto Back-end criado em PHP, usando a framework Laravel e o banco de dados MySql.
Para o funcionamento da API/Banco de dados e necessario rodar um ambiente de desenvolvimento php, no caso nesse projeto foi usado o xampp (https://www.apachefriends.org/pt_br/index.html), ligando o apache e o MySql.

Para instalação do laravel é necessario o composer
instalar o composer na maquina, comando: composer install
Instalando o laravel com o comando - composer global require laravel/installer
 https://laravel.com/docs/6.x -> guia para instalação

Inicie o xampp e de start nas opções Apache e MySql
Para acesso direto ao banco de dados http://localhost/phpmyadmin

Na pasta clonada do back-end use o $php artisan, o comando para inciar o projeto em um serve é
php artisan serve

#OBSERVAÇÃO# Caso rode o laravel em portas diferentes, configurar no front a url base no arquivo api.js

Após todos os passos a aplicação aberta no navegador http://localhost:3000 estara pronta para uso e comunicação com o banco de dados.

Impende salientar que existem files no projeto que foram montados, mas não finalizados, com o intuito de um gerenciador completo que não estão sendo executadas no fluxo principal devido ao tempo de entrega, porém visando o aprendizado será algo ainda a ser feito.

