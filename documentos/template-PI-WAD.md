# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## BookNow

#### <a href="http://www.linkedin.com/in/clara-benito">Clara Benito</a>

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

*Preencha com até 300 palavras – sem necessidade de fonte.*
*Descreva brevemente o sistema que você irá desenvolver.*

&emsp; O projeto individual consiste no desenvolvimento de um **Sistema de Reserva de Salas** para ambientes corporativos e educacionais. O objetivo é facilitar o agendamento, gerenciamento e controle de uso de salas, proporcionando mais organização e produtividade para os usuários. O sistema permitirá que colaboradores consultem a disponibilidade, filtrem as salas e realizem reservas de forma simples e eficiente, evitando conflitos de horários e otimizando o uso dos espaços.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

<div align="center">
  <sub>FIGURA X - Personass</sub><br>
  <img src= "../assets/ana-paula.jpg" width="100%" 
  alt="Modelagem banco de dados"><br>
  <sup>Fonte: Material produzido pela autora, 2025</sup>
</div>

**Idade:** 34 anos 

**Ocupação:** Gerente de Projetos em uma empresa voltada á tecnologia

**Hábitos digitais:**

1. Utiliza diariamente aplicativos de agenda e comunicação (Google Calendar, Slack, Trello)

2. Prefere soluções web/mobile rápidas e intuitivas

3. Costuma acessar sistemas tanto pelo notebook quanto pelo celular

**Necessidades:**

1. Reservar salas para reuniões de equipe e apresentações

2. Visualizar rapidamente a disponibilidade das salas

3. Garantir que não haja conflitos de horários nas reservas

**Dores:**

1. Perda de tempo ao tentar reservar uma sala e descobrir que já está ocupada

2. Falta de transparência sobre quem está usando cada sala e quando

3. Dificuldade em encontrar salas com recursos específicos (projetor, espaço disponível)

**Solução:**

&emsp; O sistema de reserva de salas ajuda Ana a visualizar facilmente a disponibilidade dos espaços, realizar reservas em poucos cliques e filtrar opções conforme suas necessidades (capacidade, equipamentos, horários). Isso elimina conflitos, economiza tempo e melhora a organização das reuniões, tornando o ambiente de trabalho mais eficiente.


### 2.2. User Stories (Semana 01)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*


| ID | Descrição
|------|----------------------------------------------------------------------------------------------------------------------------|
| US01 | Como colaborador, quero visualizar a disponibilidade das salas em um calendário, para escolher o melhor horário.|
| US02 | Como colaborador, quero reservar uma sala informando data, horário e recursos, para garantir espaço adequado.|
| US03 | Como administrador, quero aprovar ou cancelar reservas, para evitar conflitos e gerenciar espaços.|
| US04 | Como colaborador, quero receber notificações por e-mail quando minha reserva for aprovada ou rejeitada, para me manter informado sobre o status da solicitação.|
| US05 | Como colaborador, quero filtrar as salas por capacidade e equipamentos, para encontrar rapidamente uma sala que atenda às necessidades da minha reunião.|

**Análise INVEST da US01**

US01 | Como colaborador, quero visualizar a disponibilidade das salas em um calendário, para que eu possa escolher o melhor horário para minha reunião.

I – Independente:
Esta US pode ser implementada separadamente das outras, pois a visualização do calendário não depende da funcionalidade de reserva ou aprovação.

N – Negociável:
O formato da visualização (calendário semanal, mensal, lista) pode ser discutido e ajustado conforme feedback dos usuários e do time.

V – Valiosa:
Permite ao usuário tomar decisões rápidas e assertivas, reduzindo conflitos e otimizando o uso das salas.

E – Estimável:
O esforço para implementar um calendário de visualização é facilmente estimável pela equipe de desenvolvimento, pois há bibliotecas e padrões prontos para isso.

S – Pequena (Small):
A US é suficientemente pequena para ser desenvolvida em um curto espaço de tempo, sem necessidade de ser dividida.

T – Testável:
É possível testar se o calendário mostra corretamente as disponibilidades, validando com reservas reais e horários bloqueados.

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

### Diagrama Relacional

O sistema possui três entidades principais:
- **users**: usuários do sistema
- **rooms**: salas disponíveis para reserva
- **bookings**: reservas realizadas pelos usuários

O diagrama abaixo ilustra as tabelas e seus relacionamentos:

<div align="center">
  <sub>FIGURA X - Diagrama Banco de dados</sub><br>
  <img src= "../modelo-banco.png" width="100%" 
  alt="Modelagem banco de dados"><br>
  <sup>Fonte: Material produzido pela autora, 2025</sup>
</div>
---

### Modelo Físico (Schema SQL)

O código SQL completo para a criação das tabelas do banco de dados encontra-se no arquivo [`modelo-banco.sql`](./modelo-banco.sql), localizado na raiz do repositório deste projeto.

Para consultar a estrutura detalhada das tabelas e seus relacionamentos, acesse diretamente esse arquivo.

https://github.com/clarabenito/Projeto-Individual-1B/blob/main/modelo-banco.sql

**Resumo das entidades e relações:**
- Cada usuário pode realizar várias reservas.
- Cada sala pode ser reservada múltiplas vezes (em horários diferentes).
- Cada reserva está associada a um usuário e a uma sala específica.

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
