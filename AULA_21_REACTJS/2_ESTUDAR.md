# README: Instalando Vite com React e JavaScript

## Visão Geral

Vite é uma ferramenta de build e desenvolvimento extremamente rápida, construída com foco em tempos de inicialização rápidos e otimização da experiência de desenvolvimento. Neste guia, vamos mostrar como instalar o Vite com React e configurar um projeto utilizando JavaScript.

## Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar a versão instalada com o comando:

  ```bash
  node -v
  ```

  Se não tiver o Node.js instalado, você pode fazer o download em [https://nodejs.org/](https://nodejs.org/).

## Passo a Passo para Instalação

1. **Crie um novo projeto com Vite**

   Primeiramente, você precisa criar um novo projeto utilizando o Vite. Abra o terminal e execute o comando abaixo:

   ```bash
   npm create vite@latest my-vite-app --template react
   ```

   Substitua `my-vite-app` pelo nome do seu projeto.

   Isso vai criar uma nova pasta com o nome do projeto e configurar o Vite com o template do React.

2. **Instale as dependências**

   Acesse a pasta do projeto recém-criado:

   ```bash
   cd my-vite-app
   ```

   Agora, instale as dependências necessárias com o comando:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   Para começar a desenvolver, inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O Vite vai iniciar um servidor local e você pode acessar seu projeto no navegador em `http://localhost:5173`.

---

## Estrutura de Diretórios do Projeto

Depois de rodar o Vite com o template do React, a estrutura de diretórios do seu projeto será algo semelhante a isso:

```
my-vite-app/
├── node_modules/        # Dependências instaladas
├── public/              # Arquivos estáticos públicos (ícones, imagens, etc.)
│   └── index.html       # Arquivo HTML de entrada
├── src/                 # Código-fonte do seu aplicativo
│   ├── assets/          # Arquivos estáticos usados no código (ex: imagens)
│   ├── App.jsx          # Componente principal do React
│   ├── main.jsx         # Ponto de entrada do React
├── package.json         # Gerencia dependências, scripts e informações do projeto
├── vite.config.js       # Configuração do Vite
└── index.html           # O template HTML usado no Vite
```

### Explicação dos diretórios e arquivos principais

- **`public/`**: Diretório para arquivos públicos, como o `index.html` e qualquer outro arquivo estático (ex: imagens e fontes). Arquivos dentro deste diretório são servidos diretamente.
- **`src/`**: Contém todo o código-fonte do seu aplicativo React.
  - **`App.jsx`**: Componente principal onde a aplicação React é definida.
  - **`main.jsx`**: Arquivo que faz o "render" do seu componente principal (`App`) no DOM.
  - **`assets/`**: Pasta onde você pode armazenar imagens, fontes, e outros arquivos estáticos.
- **`package.json`**: Contém informações do projeto e scripts. Também lista as dependências do projeto.
- **`vite.config.js`**: Arquivo de configuração do Vite. Aqui você pode modificar as opções do build, como a definição de plugins ou a configuração de resoluções de módulos.

---

## Processo de Build (Compilação)

Após o desenvolvimento, você pode criar uma versão otimizada do seu projeto usando o comando de build do Vite.

1. **Construção do Projeto**

   Execute o comando abaixo para criar uma versão otimizada para produção:

   ```bash
   npm run build
   ```

   O Vite vai gerar os arquivos otimizados na pasta `dist/`.

2. **Verificar o Build**

   O diretório `dist/` conterá os arquivos finais para produção. Para rodar uma versão local do build, você pode usar o seguinte comando:

   ```bash
   npm run preview
   ```

   Isso iniciará um servidor de pré-visualização para testar o projeto otimizado antes de colocá-lo em produção.

---

## Scripts Comuns

- **`npm run dev`**: Inicia o servidor de desenvolvimento em modo hot-reload.
- **`npm run build`**: Gera uma versão otimizada do seu projeto para produção.
- **`npm run preview`**: Visualiza a versão otimizada (build) localmente.

---

## Conclusão

Agora, com o Vite configurado para React e JavaScript, você está pronto para desenvolver sua aplicação de maneira rápida e eficiente. Aproveite a agilidade do Vite e a flexibilidade do React para criar experiências incríveis!