# O que é o ReactJS?

O **ReactJS** é uma biblioteca de JavaScript de código aberto criada pelo Facebook que facilita a construção de interfaces de usuário (UI) para aplicativos web. O React permite a criação de interfaces interativas e reutilizáveis de maneira eficiente, utilizando componentes.

React é utilizado principalmente para desenvolver **single-page applications** (SPAs), onde uma única página carrega de maneira dinâmica à medida que o usuário interage com a interface. Ele se destaca por sua velocidade, flexibilidade e capacidade de gerenciar o estado da aplicação de forma eficiente.

## Principais Características do ReactJS

### 1. **Componentes**
   O React é baseado em componentes, que são pedaços de código reutilizáveis que gerenciam seu próprio estado e lógica de UI. Cada componente pode ser um simples botão ou um formulário complexo. Isso ajuda a organizar e modularizar o código, tornando a aplicação mais fácil de manter e escalar.

   Existem dois tipos principais de componentes no React:
   - **Componentes de Classe**: Mais antigos, definidos com `class`, que possuem métodos como `render()`, `componentDidMount()`, etc.
   - **Componentes Funcionais**: Mais modernos, definidos com `function`, e podem usar hooks para gerenciar estado e efeitos colaterais.

   Exemplo de um componente funcional:

   ```jsx
   import React from 'react';

   function MeuComponente() {
     return <h1>Olá, Mundo!</h1>;
   }

   export default MeuComponente;
   ```

### 2. **JSX (JavaScript XML)**
   JSX é uma extensão da sintaxe do JavaScript que permite escrever HTML dentro de código JavaScript. Ele torna o código mais legível e próximo da estrutura de uma página HTML, mas com a flexibilidade de usar a lógica de programação.

   Exemplo de JSX:

   ```jsx
   const nome = "João";

   function Saudacao() {
     return <h1>Olá, {nome}!</h1>;
   }
   ```

   JSX é compilado para `React.createElement()` durante a construção do código.

### 3. **Virtual DOM**
   O React utiliza um **Virtual DOM**, uma cópia em memória do DOM real. Isso permite que o React execute atualizações de forma mais eficiente. Quando o estado de um componente muda, o React cria uma nova versão do Virtual DOM, compara com a versão anterior e, então, atualiza apenas as partes da interface que realmente mudaram no DOM real.

### 4. **Estado (State)**
   O estado é uma das funcionalidades principais no React. Cada componente pode ter seu próprio estado, que é uma forma de armazenar dados que podem mudar ao longo do tempo e, quando alterados, a interface é atualizada automaticamente.

   Exemplo de uso de estado em um componente funcional:

   ```jsx
   import React, { useState } from 'react';

   function Contador() {
     const [contagem, setContagem] = useState(0);

     return (
       <div>
         <p>Contagem: {contagem}</p>
         <button onClick={() => setContagem(contagem + 1)}>Incrementar</button>
       </div>
     );
   }

   export default Contador;
   ```

   Nesse exemplo, a função `useState()` é um **hook** que cria o estado `contagem` e a função `setContagem` para atualizá-lo.

### 5. **Props (Propriedades)**
   As **props** são como argumentos passados para um componente. Elas são usadas para passar dados de um componente pai para um componente filho. As props são imutáveis, ou seja, não podem ser modificadas pelo componente que as recebe.

   Exemplo de uso de props:

   ```jsx
   function Saudacao({ nome }) {
     return <h1>Olá, {nome}!</h1>;
   }

   function App() {
     return <Saudacao nome="Maria" />;
   }

   export default App;
   ```

   Aqui, o componente `Saudacao` recebe a prop `nome` e a exibe. O valor da prop é passado pelo componente `App`.

### 6. **Efeitos Colaterais (useEffect)**
   O hook `useEffect()` permite executar efeitos colaterais, como chamadas de API ou manipulação de eventos. Ele é semelhante aos métodos de ciclo de vida em componentes de classe, como `componentDidMount()`, `componentDidUpdate()` e `componentWillUnmount()`.

   Exemplo de uso de `useEffect`:

   ```jsx
   import React, { useState, useEffect } from 'react';

   function Dados() {
     const [dados, setDados] = useState([]);

     useEffect(() => {
       fetch('https://api.exemplo.com/dados')
         .then(res => res.json())
         .then(data => setDados(data));
     }, []); // O array vazio indica que o efeito é executado uma vez após o carregamento

     return (
       <div>
         <ul>
           {dados.map(dado => (
             <li key={dado.id}>{dado.nome}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default Dados;
   ```

   Neste exemplo, `useEffect` executa a função para buscar dados de uma API assim que o componente for montado.

### 7. **Contexto (Context API)**
   O Contexto do React permite que você compartilhe dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes. Isso é útil para dados que precisam ser acessados globalmente, como temas ou informações de autenticação.

   Exemplo de Contexto:

   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const TemaContext = createContext();

   function App() {
     const [tema, setTema] = useState("light");

     return (
       <TemaContext.Provider value={{ tema, setTema }}>
         <Componente />
       </TemaContext.Provider>
     );
   }

   function Componente() {
     const { tema, setTema } = useContext(TemaContext);

     return (
       <div>
         <p>O tema atual é {tema}</p>
         <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
           Mudar Tema
         </button>
       </div>
     );
   }

   export default App;
   ```

---

## Como Começar com o ReactJS

### 1. **Criar um Novo Projeto React**

A maneira mais rápida de começar com React é usar o [Create React App](https://reactjs.org/docs/create-a-new-react-app.html), uma ferramenta oficial que configura um projeto React para você.

Para começar, abra o terminal e execute:

```bash
npx create-react-app meu-app
cd meu-app
npm start
```

Isso vai configurar seu ambiente de desenvolvimento React e abrir um servidor local no navegador.

### 2. **Instalar o React Manualmente com Vite (Alternativa)**

Outra maneira rápida de começar com o React é usar o Vite, que é mais moderno e muito mais rápido para desenvolvimento. Para criar um projeto com o Vite e React, execute:

```bash
npm create vite@latest meu-app --template react
cd meu-app
npm install
npm run dev
```

---

## Conclusão

O ReactJS é uma das bibliotecas JavaScript mais populares e poderosas para construir interfaces de usuário interativas. Seu foco em componentes reutilizáveis, estados e efeitos colaterais, bem como sua integração com o Virtual DOM, tornam o React altamente eficiente para criar aplicativos complexos de maneira simples e organizada.

Agora, com este guia, você está pronto para começar a explorar e criar suas próprias aplicações com React!