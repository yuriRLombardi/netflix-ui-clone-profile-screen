# Netflix - Profile Selection UI Clone

Clone da tela “Quem está assistindo?” da Netflix, desenvolvido durante a Imersão Front-End na Era da IA da Alura com uma página de catálogos.

O projeto teve como objetivo imergir nas tecnologias HTML, CSS e JavaScript, aplicando conceitos de construção de interfaces enquanto utilizava sugestões de IA, com o Microsoft Copilot, durante o desenvolvimento.

## Sobre o projeto

Este projeto reproduz uma experiência de streaming com seções de conteúdo organizadas em categorias, cards interativos e elementos visuais inspirados no layout do Netflix. Ele inclui:

- uma página inicial (`index.html`) com carroséis de conteúdo;
- uma seção de catálogo (`catalogo/catalogo.html`) com várias categorias de filmes e séries;
- cards que exibem imagem, badges (por exemplo, "Clássico", "Novo episódio"), indicador de progresso e links de vídeo.

O objetivo é demonstrar uma interface responsiva e interativa sem depender de frameworks externos.

## Objetivos de aprendizado

<ul>
    <li>Aprender os fundamentos de HTML, CSS e JavaScript</li>
    <li>Desenvolver habilidades de criação de interfaces (UI)</li>
    <li>Praticar organização e estruturação de código</li>
    <li>Utilizar ferramentas de IA para auxiliar no desenvolvimento</li>
</ul>


## Estrutura do projeto

- `index.html` - página principal
- `style.css` - estilos globais
- `js/index.js` - scripts da página inicial
- `js/theme.js` - alternância de tema/cores
- `catalogo/catalogo.html` - página de catálogo
- `catalogo/catalogo.css` - estilos do catálogo
- `catalogo/js/data.js` - dados de categorias e itens
- `catalogo/js/main.js` - lógica de renderização do catálogo
- `catalogo/js/utils.js` - utilitários compartilhados
- `catalogo/js/components/` - componentes reutilizáveis de interface

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Funcionalidades principais

- categorias de conteúdo com títulos e listas de itens
- cards de mídia com imagens e estado
- badges dinâmicos para indicar novidades ou destaques
- integração com links de vídeo do YouTube
- organização modular de scripts e componentes

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Navegue até `catalogo/catalogo.html` para ver o catálogo.

## Observações

- Projeto sem backend: todos os dados são carregados localmente via `catalogo/js/data.js`.
- Feito para estudo e prática de layout responsivo e DOM.
