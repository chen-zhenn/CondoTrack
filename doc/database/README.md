# CondoTrack - Banco de Dados

Este documento descreve a estrutura do banco de dados para o sistema **CondoTrack**, utilizado para a gestão administrativa de um condomínio.

## Estrutura do Banco de Dados

A seguir, estão os esquemas de banco de dados que foram definidos para gerenciar as diversas funcionalidades do sistema. A estrutura do banco de dados utiliza o MongoDB com o Mongoose para definir os esquemas e validações.

### Esquemas

- **BalanceSchema**: Gerencia os balanços financeiros do condomínio, incluindo saldo, despesas e pagamentos.
- **BuildingSchema**: Contém as informações gerais sobre o condomínio, como nome e endereço.
- **CostSharingSchema**: Gerencia o rateio de despesas entre as unidades do condomínio.
- **ExpenseSchema**: Define as despesas do condomínio, como manutenção, contas de consumo e outras despesas gerais.
- **PaymentSchema**: Registra os pagamentos feitos pelos condôminos.
- **ResidentSchema**: Representa os moradores do condomínio e suas unidades correspondentes.
- **UnitSchema**: Representa as unidades do condomínio (por exemplo, apartamentos ou blocos).
- **UserSchema**: Armazena informações sobre os usuários do sistema (administradores e condôminos), incluindo permissões de acesso.

## Descrição dos Esquemas

...
