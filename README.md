# Meu Projeto React com Vite

Este é um projeto React configurado com Vite para um desenvolvimento rápido e eficiente. Abaixo estão as instruções para iniciar e contribuir para o projeto.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)


## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js 18^ e o yarn instalado em seu computador. Você pode baixar a versão mais recente do Node.js [aqui](https://nodejs.org/).

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Vlad-Taguerran/adoptAPet--front
   cd adoptAPet-front
# Instale as dependências do projeto
yarn install

## Uso
  para modo dev:
    yarn dev
  para deploy:
    yarn buuld 

## Scripts Disponíveis

  `yarn dev`: Inicia o servidor de desenvolvimento.
  `yarn build`: Cria uma versão otimizada para produção na pasta `dist`.
  `yarn preview`: Visualiza a versão de produção localmente.

## Estrutura do Projeto

my-react-vite-project/
├── public/               # Arquivos públicos estáticos
├── src/                  # Código-fonte do projeto
│   ├── assets/           # Imagens e outros recursos estáticos
│   ├── components/       # Componentes React
│   ├── App.jsx           # Componente principal da aplicação
│   └── main.jsx          # Ponto de entrada da aplicação
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
├── index.html            # Arquivo HTML principal
├── package.json          # Dependências e scripts do projeto
├── README.md             # Documentação do projeto
└── vite.config.js        # Configurações do Vite
