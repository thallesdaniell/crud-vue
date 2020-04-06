# Aplicação desafio Sell2Brazil

Aplicação criada como avaliação de processo seletivo.

__Objetivo__: Desenvolver uma aplicação usando Vue/Laravel/Dokcer, o código deve ser hospedado no Github com um README.md contendo as instruções de instalação para teste.

Prazo de Envio: 06/abr/2020.


Executar a aplicação
--------------------
Clonar projeto
```
$ git clone git@github.com:thallesdaniell/desafio-sell2brazil.git
```

Configuração Container Nginx
----------------------------
2. Volume (Obs: verificar se na configuração do docker -> drivers compartilhados, as unidades c: e/ou d: estão habilitadas)

	Aplicação: htdocs -> /var/www/html
	
	

Configuração Container Php
--------------------------
1. Volume (Obs: verificar se na configuração do docker -> drivers compartilhados, as unidades c: e/ou d: estão habilitadas)

	Aplicação: htdocs -> /var/www/html
	
2. Bibliotecas

Configuração Container Mysql
----------------------------
1. Exposição de portas

	3306

2. Volume (Obs: verificar se na configuração do docker -> drivers compartilhados, as unidades c: e/ou d: estão habilitadas)

	Aplicação: mysql/data -> /var/lib/mysql
	
Como utitilizar
---------------
1. Clone o repositório usando o comando:

   ```
   $ git clone git@github.com:thallesdaniell/desafio-sell2brazil.git
   ```

2. Rode seu container:

   docker-compose up -d

5. Acessar o shell do container `demo_app` e excute:
    
	`$ docker exec -it demo_app php artisan migrate --seed`


8. Abra no navegador

   http://localhost:8123/

9. Acessar o banco de dados dentro do container Mysql

    `$ docker exec -it demo_db bash`

	`$ mysql -u root -p`

10. Comandos básicos para utilizar o banco de dados

	show databases;

	CREATE DATABASE app_database;
	
	use app_database;
	
	show tables;
