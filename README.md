# ✊ Jokenpô — Pedra, Papel e Tesoura

Jogo interativo desenvolvido com **HTML5, CSS3 e JavaScript puro**, no qual o
jogador enfrenta o computador em partidas de pedra, papel e tesoura.

![Tela inicial do jogo](./tela-inicial.png)

## Sobre o projeto

Este projeto foi desenvolvido como atividade prática da disciplina de
**Desenvolvimento em JavaScript**. A aplicação apresenta uma interface moderna,
responsiva e acessível, permitindo que o usuário escolha uma jogada e acompanhe
o resultado da rodada em tempo real.

## Funcionalidades

- Escolha entre pedra, papel ou tesoura;
- Jogada aleatória realizada pelo computador;
- Sistema automático de vitória, derrota e empate;
- Placar atualizado a cada rodada;
- Exibição das jogadas do usuário e do computador;
- Mensagens personalizadas para cada resultado;
- Botão para reiniciar a partida;
- Interface responsiva para diferentes tamanhos de tela;
- Estados visuais para interação, foco e resultado;
- Elementos semânticos e atributos de acessibilidade.

## Regras do jogo

- Pedra vence tesoura;
- Tesoura vence papel;
- Papel vence pedra;
- Jogadas iguais resultam em empate.

## Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura semântica da aplicação |
| CSS3 | Layout, responsividade, cores e animações |
| JavaScript | Regras do jogo, eventos e atualização do placar |

## Estrutura do projeto

```text
jogo-de-jokenpo/
├── index.html
├── scripts.js
├── styles.css
├── tela-inicial.png
└── README.md
```

## Como executar

### Opção 1 — Abrir diretamente no navegador

1. Acesse a pasta do projeto.
2. Abra o arquivo `index.html` no navegador.
3. Escolha uma das opções disponíveis para iniciar uma rodada.

### Opção 2 — Utilizar o Live Server

1. Abra a pasta no Visual Studio Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito sobre `index.html`.
4. Selecione **Open with Live Server**.

## Como funciona

Ao selecionar uma jogada, o JavaScript:

1. Identifica a escolha do jogador;
2. Sorteia uma jogada para o computador;
3. Compara as duas opções;
4. Define o resultado da rodada;
5. Atualiza o placar;
6. Exibe as jogadas e uma mensagem correspondente.

A lógica principal está implementada em `scripts.js`, enquanto a aparência e os
comportamentos visuais estão definidos em `styles.css`.

## Interface

A interface utiliza:

- Tema escuro;
- Gradientes de fundo;
- Cartões com bordas arredondadas;
- Botões interativos;
- Emojis para representar as jogadas;
- Layout adaptável para dispositivos móveis;
- Destaque visual para vitória, derrota e empate.

## Acessibilidade

Foram utilizados recursos para melhorar a experiência de navegação, incluindo:

- Elementos HTML semânticos;
- Rótulos `aria-label` nos botões;
- Região dinâmica com `aria-live`;
- Estados de foco com `:focus-visible`;
- Contraste adequado entre texto e fundo;
- Botões nativos para interação por teclado.

## Possíveis melhorias

- Adicionar modo melhor de três;
- Criar níveis de dificuldade;
- Salvar o placar no `localStorage`;
- Adicionar efeitos sonoros;
- Criar histórico de partidas;
- Implementar modo para dois jogadores;
- Publicar a aplicação em uma plataforma de hospedagem.

## Autor

Projeto desenvolvido como atividade acadêmica da disciplina de
**Desenvolvimento em JavaScript**.
