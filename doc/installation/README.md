# CondoTrack - Docker

Esta documento descreve o setup do Docker para o ambiente de desenvolvimento do sistema **CondoTrack**.

## :electric_plug: Instalação

[aqui uma imagem do processo de instalação]

## Dependências

- **Docker**: [Doc](https://www.docker.com/get-started)
- **Docker Compose**: [Como instalar](https://docs.docker.com/compose/install/)

## Como rodar

> **Nota**: 
Certifique-se de estar no diretório raiz **:open_file_folder:**

__Passo 1: Clone o repositório__

```
git clone git@github.com:chen-zhenn/CondoTrack.git
```

__Passo 2: Crie a imagem Docker__

```
docker-compose build
```

__Passo 3: Inicie o ambiente Docker__

```
docker-compose up
```

__Passo 4: Acesse o sistema__

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
