# 🚀 File Manager

![status](https://img.shields.io/badge/status-finalizado-brightgreen)
![node](https://img.shields.io/badge/node-%3E%3D14.x-green)
![npm](https://img.shields.io/badge/npm-%3E%3D6.x-blue)
![license](https://img.shields.io/badge/license-MIT-blue)

É um sistema de gerenciamento de arquivos em Node.js que permite ao usuário interagir com arquivos e diretórios por meio de um menu no terminal. O sistema utiliza o módulo `fs` para manipulação de arquivos e diretórios, e o `readline-sync` para capturar entradas do usuário. A funcionalidade está organizada em dois arquivos principais:

## 🛠️ Funcionalidades

* Criação de Diretórios:
  - O sistema cria automaticamente um diretório base chamado my_files na mesma pasta do script, onde todos os arquivos serão gerenciados.
* Menu Interativo:
  - O menu é exibido no terminal, permitindo que o usuário escolha entre as opções disponíveis.
* Manipulação de Arquivos:
  - Criação de arquivos com ou sem conteúdo inicial.
  - Listagem de todos os arquivos no diretório base.
  - Leitura do conteúdo de arquivos existentes.
  - Escrita (ou sobrescrita) de conteúdo em arquivos.
  - Exclusão de arquivos.
* Tratamento de Erros:
  - O sistema captura e exibe erros, como tentativas de acessar arquivos inexistentes ou problemas de permissão.

## 🧭 Como executar

```bash
npm install
node index.js
```

## 🧰 Requisitos

- Node.js >= 14.x
- npm >= 6.x

## 📂 Estrutura do Projeto

```
├── my_files/             # Diretório base criado automaticamente;
├── node_modules/         # Dependências instaladas pelo npm 
├── fileManager.js        # Manipulação de arquivos e diretórios 
├── index.js              # Arquivo principal que executa o menu interativo 
├── package.json          # Configurações do projeto e dependências 
├── package-lock.json     # Arquivo de bloqueio de dependências gerado pelo npm 
└── readme.md             # Documentação do projeto
```

## 🧩 Como funciona

Ao iniciar o programa `(main())`, o diretório `base my_files` é criado automaticamente.
O menu é exibido continuamente até que o usuário escolha a opção "Sair".
Cada opção do menu chama uma função correspondente do `fileManager.js`, passando os parâmetros necessários.
As operações são realizadas de forma assíncrona, garantindo que o programa não trave durante a execução.

🔹 Projeto criado para aprendizado e prática! 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊
