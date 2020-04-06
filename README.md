<p align="center">
<img src="https://privatecode.com.br/img/logo/private-code-square-claro-alta.png" width="400"></p>



Aplicação desafio Sell2Brazil
------------------------------

Aplicação criada como avaliação de processo seletivo.

__Objetivo__: Desenvolver uma aplicação usando Vue/Laravel/Dokcer, o código deve ser hospedado no Github com um README.md contendo as instruções de instalação para teste.

Prazo de Envio: 06/abr/2020.

Executar a aplicação
--------------------

Clonar projeto
```
$ git clone git@github.com:thallesdaniell/desafio-sell2brazil.git
```


Configurar `.env` com as credênciais abaixo. Por padrão já configurei. 
Caso deseje alterar fique a vontade.
```
  DB_DATABASE=laravel
  DB_PASSWORD=password
```

Subir os containers.
```
$ docker-compose up -d
```


Caso ocorra tudo como esperado será acessivel através dessa url:

```
http://localhost:8123/
```

