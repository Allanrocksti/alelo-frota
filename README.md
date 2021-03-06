# Alelo Frota - Front-end

##### Protótipo simplificado de um sistema web solicitado como desafio pela Alelo Frota.

##### Antes de iniciar o desenvolvimento, este projeto passou por uma fase de prototipagem que está disponível para visualização em: https://www.figma.com/file/V9xbfXfoF45xLFOJIDJzut/Alelo-Frota?node-id=0%3A1

##### Esse projeto está configurado em modo de produção na plataforma do Firebase Hosting, acessível pelo link: https://alelo-frota.web.app/

# Instruções para rodar em servidor de desenvolvimento

## Pré-requisitos

- ##### nodejs (disponível para dowload em: [NODEJS](nodejs.org))
- ##### npm (Normalmente vem junto com o nodejs)

## Instalação do Framework Angular 2+

```bash
$ npm install -g @angular/cli
```

## Configuração do projeto

```bash
$ cd <meu-workspace>
$ git clone https://github.com/Allanrocksti/alelo-frota.git
$ cd alelo-frota
$ npm i
$ ng serve --host 0.0.0.0 --open
```

##### O app ficará acessível em [localhost:4200](localhost:4200) e no ip do dispositivo, na porta 4200 para dispositivos conectados na mesma rede em qual o computador está conectado

## Observações

###### Por não ter conhecimento de como obter a quantidade de páginas disponíveis no Mockable.io, a paginação feita está buscando e sendo montado a partir da obtenção de todos os carros, mas não quer dizer que a aplicação não está pronta para receber dinamicamente, visto que os services estão prontos para realizar a requisição com filtro de quantidade e página.

##### Por conta do curto tempo, o repositório ainda está passando por alterações e ainda receberá alterações.
