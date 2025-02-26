# Imersão Fullcycle 21 - Home Broker

## Descrição

Repositório do Nest.js (back-end do home broker).

## Requerimentos

- Node.js
- Docker

## Rodar o Docker

Rode o comando para levantar o MongoDB no Docker:

```bash
docker compose up
```

## Rodar a aplicação

### Instalar as dependências

```bash
npm install
```

### Levantar o asset server

```bash
npm run assets-image
```

### Levantar o servidor HTTP

```bash
npm run start:dev
```

As especificações das chamadas HTTP estão no arquivo `api.http`. Você pode usar a extensão `REST Client` do VSCode para fazer as chamadas.

### Consumir mensagens do Kafka

```bash
npm run start:dev -- --entryFile _cmd/kafka/kafka.cmd
```

## Popular o banco e gerar ordens de compra e venda automática

### Popular o banco

```bash
npm run command simulate-assets-price
```

Você vai preencher o banco com assets já predefinidos e também criar 2 carteiras e adicionar alguns assets a elas.

### Gerar ordens de compra e venda

Após popular o banco, podemos também criar ordens de compra e venda automaticamente:

Caso opte por gerar ordens de compra e venda, responda a pergunta a seguir como sim:

**"Gerar ordens de compra e venda?"**

### Gerar ordens de fechamento

Caso opte por rodar sem o Kafka, após gerar as ordens de compra e venda, você pode gerar as trades respondendo a pergunta a seguir como sim:

**"Gerar ordens de fechamento?"**
