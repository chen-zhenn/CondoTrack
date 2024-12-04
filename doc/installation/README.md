# CondoTrack - Docker

Esta documento descreve o setup do Docker para o ambiente de desenvolvimento do sistema **CondoTrack**.

## :electric_plug: Instalação

[aqui uma imagem do processo de instalação]

## Dependências

- **Docker v25.0.1**: [Doc](https://www.docker.com/get-started)
- **Docker Compose v2.3.3**: [Como instalar](https://docs.docker.com/compose/install/)

## Clone o repositório

```
git clone git@github.com:chen-zhenn/CondoTrack.git
```

## 1. Configuração inicial

> **Nota**: 
Certifique-se de estar na raiz do diretório **/back-end :open_file_folder:**

__Passo 1.1: Habilite arquivo de configurações de ambiente__

```
cp .env.sample .env
```

__Passo 1.2. Instale as dependências__

```
yarn install
```

## 2. Como rodar

> **Nota**: 
Certifique-se de estar no diretório raiz do projeto **/ :open_file_folder:**


__Passo 2.1: Crie a imagem Docker__

```
docker-compose build
```

__Passo 2.2: Inicie o ambiente Docker__

```
docker-compose up
```

__Passo 2.3: Acesse o sistema__

Abra seu navegador e acesse a aplicação em: [http://localhost:8000](http://localhost:8000)

### :boom: Boom! Seu ambiente de desenvolvimento está rodando!             

## :wrench: Gerenciamento

- **Levantar containers**:

```
docker-compose up
```

- **Parar containers**:

```
docker-compose down
```

- **Reiniciar containers**:

```
docker-compose restart
```
