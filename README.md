# Imersão Fullcycle 21 - Home Broker

## Sobre o Projeto

Repositório oficial da imersão [homebroker](https://github.com/devfullcycle/imersao21)

Este projeto foi uma jornada enriquecedora durante a Imersão Fullcycle 21. Tivemos a oportunidade de desenvolver um sistema completo de home broker, abrangendo desde o backend até o frontend, utilizando tecnologias de ponta.

### Visão Geral

O sistema de home broker desenvolvido permite que os usuários realizem operações de compra e venda de ações em tempo real. A aplicação é composta por três componentes principais:

1. **Backend em Golang**: Responsável por gerenciar as operações de compra e venda, simulando a bolsa de valores.
2. **API em Nest.js**: Fornece uma interface de comunicação entre o frontend e o backend, garantindo a segurança e integridade dos dados.
3. **Frontend em Next.js**: Interface gráfica onde os usuários podem visualizar as ações disponíveis, realizar operações e acompanhar o status de suas transações.

### Tecnologias Utilizadas

- **Golang**: Escolhido para o desenvolvimento do simulador da bolsa de valores devido à sua alta performance e eficiência.
- **Kafka**: Plataforma de streaming utilizada para garantir a comunicação em tempo real entre os componentes do sistema.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados de forma eficiente e escalável.
- **Nest.js**: Utilizado para construir a API, é um framework Node.js robusto e escalável.
- **Next.js**: Framework React utilizado no desenvolvimento do frontend, proporcionando uma experiência de usuário rápida e interativa.

### Arquitetura do Sistema

A arquitetura do sistema foi projetada para ser modular e escalável, permitindo fácil manutenção e evolução. A comunicação entre os componentes é feita de forma assíncrona, utilizando Kafka para garantir a integridade e consistência dos dados.

## Executando a Aplicação

Para executar os projetos, entre em cada pasta e siga as instruções fornecidas nos respectivos **README.md**. A ordem de execução recomendada é:

1. [Golang](./go/README.md)
2. [Nest.js](./homebroker-api/README.md)
3. [Next.js](./homebroker-frontend/README.md)

## Arquitetura Geral do Projeto

![Arquitetura do Projeto](./arquitetura_projeto.png)
