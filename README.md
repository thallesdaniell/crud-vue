
## Documentação

* [Descrição](#descrição)
* [Configuração](#configuração)
* [Execução](#execução)
    - [Clonar respositório](#1-clone-o-repositório-usando-o-comando)
    - [Rodar container](#2-rode-seu-container)
    - [Acessar Shell](#3-acessar-o-shell-do-container-demo_app-e-excute)
* [Uso](#uso)
    - [Acessar aplicação](#1-abra-no-navegador)
    - [Acessar Mysql](#2-acessar-o-banco-de-dados-dentro-do-container-mysql-caso-precise)
    - [Comandos básicos](#3-comandos-básicos-para-utilizar-o-banco-de-dados)




## Descrição

 - Aplicação criada como avaliação de processo seletivo.

 - __Objetivo__: Desenvolver uma aplicação usando Vue/Laravel/Dokcer, o código deve ser hospedado no Github com um README.md contendo as instruções de instalação para teste.

 - Prazo de Envio: 06/abr/2020.


## Configuração

##### 1. Volume (Obs: verificar se na configuração do docker -> drivers compartilhados, as unidades c: e/ou d: estão habilitadas)

        htdocs -> /var/www/html
        
        htdocs -> /var/www/html
        
        mysql/data -> /var/lib/mysql
	
## Execução

##### 1. Clone o repositório usando o comando:

```
$ git clone git@github.com:thallesdaniell/desafio-sell2brazil.git
```

##### 2. Rode seu container:

```
$ docker-compose up -d
```

##### 3. Acessar o shell do container `demo_app` e execute:
    
```
$ docker exec -it demo_app php artisan migrate --seed
```

## Uso

##### 1. Abra no navegador

   http://localhost:8123/

##### 2. Acessar o banco de dados dentro do container Mysql caso precise:

```
$ docker exec -it demo_db bash
```

```
$ mysql -u root -p
```

##### 3. Comandos básicos para utilizar o banco de dados:

	show databases;

	CREATE DATABASE app_database;
	
	use app_database;
	
	show tables;
