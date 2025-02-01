## Desafio: Criando um Site de Exibição de Produtos com Vite e ReactJS

### Objetivo

O objetivo deste desafio é criar um site simples de e-commerce utilizando **Vite** e **ReactJS**. O site irá exibir uma lista de produtos e permitir que os usuários interajam com ela, visualizando os detalhes dos produtos e adicionando-os ao carrinho.

---

### Requisitos do Desafio

1. **Configuração Inicial com Vite e ReactJS**
   - Use o Vite para configurar um novo projeto React.
   - O projeto deve ter uma estrutura simples e organizada, com os componentes necessários.

2. **Exibição de Produtos**
   - Crie uma lista de produtos que será exibida na página principal. 
   - Cada produto deve exibir:
     - Nome
     - Imagem (Você pode usar imagens de exemplo ou fontes de imagens públicas)
     - Preço
     - Botão "Adicionar ao Carrinho"

   Você pode começar com uma lista de produtos fictícios ou usar uma API pública de produtos, como a [Fake Store API](https://fakestoreapi.com/).

3. **Página de Detalhes do Produto**
   - Ao clicar em um produto na lista, o usuário deve ser redirecionado para uma página de detalhes onde:
     - O produto deve ser exibido com mais detalhes (descrição, preço, etc.)
     - Um botão para adicionar ao carrinho deve estar disponível também na página de detalhes.

4. **Carrinho de Compras**
   - Crie um componente de **Carrinho de Compras** que será exibido em um menu lateral ou na parte superior da página.
   - O carrinho deve:
     - Exibir os produtos adicionados.
     - Mostrar o nome do produto, a quantidade e o preço total.
     - Permitir que o usuário remova um item do carrinho.
     - Calcular o preço total de todos os produtos no carrinho.

5. **Gerenciamento de Estado**
   - Use o **useState** para gerenciar o estado dos produtos no carrinho.
   - Ao clicar no botão de adicionar ao carrinho, o produto deve ser adicionado ao estado do carrinho.
   - O estado do carrinho deve ser persistido enquanto o usuário navega entre as páginas (use o **React Router** para navegação).

6. **Estilização**
   - A página deve ter um design simples e intuitivo.
   - Use **CSS** ou **CSS-in-JS** (por exemplo, `styled-components`) para estilizar os componentes.
   - Tente criar um layout responsivo para que o site fique bem em dispositivos móveis.

7. **Opções Extras (Opcional, mas recomendado)**
   - Implementar um filtro para produtos por categoria ou preço.
   - Adicionar uma funcionalidade de pesquisa para encontrar produtos rapidamente.
   - Usar imagens reais e mais detalhadas para os produtos.
   - Melhorar a experiência do usuário, como adicionar um "efeito de hover" nos produtos.

---

### Estrutura Básica do Projeto

Após criar o projeto com Vite e React, a estrutura de arquivos pode se parecer com isso:

```
meu-site-de-produtos/
├── public/
│   └── index.html
├── src/
│   ├── assets/          # Imagens ou arquivos estáticos
│   ├── components/      # Componentes como Produto, Carrinho, etc.
│   ├── pages/           # Páginas como Home, ProdutoDetalhes, etc.
│   ├── App.jsx          # Componente principal do React
│   ├── index.css        # Arquivo CSS global
│   ├── main.jsx         # Ponto de entrada do React
├── package.json         # Gerenciamento de dependências e scripts
└── vite.config.js       # Configurações do Vite
```

---

### Tarefas Passo a Passo

1. **Passo 1: Criar o Projeto**
   - Inicie um novo projeto com Vite e React:

     ```bash
     npm create vite@latest meu-site-de-produtos --template react
     cd meu-site-de-produtos
     npm install
     ```

2. **Passo 2: Estruturar os Componentes**
   - Crie os componentes principais:
     - **ProductList**: Lista de produtos.
     - **ProductCard**: Exibe informações de um produto.
     - **ProductDetails**: Exibe mais informações de um produto ao clicar.
     - **Cart**: Exibe os itens do carrinho.
     - **Header**: Exibe o nome do site e um ícone de carrinho.

3. **Passo 3: Configurar o React Router**
   - Instale o React Router para navegar entre as páginas:

     ```bash
     npm install react-router-dom
     ```

   - Configure as rotas para navegar entre a página inicial e a página de detalhes do produto.

4. **Passo 4: Adicionar Produtos**
   - Crie uma lista de produtos no estado do componente `App` ou busque os produtos de uma API.
   - Mostre esses produtos na tela usando o componente `ProductList` e `ProductCard`.

5. **Passo 5: Implementar o Carrinho**
   - Crie um estado global para o carrinho e um componente para exibir os itens no carrinho.
   - Implemente funcionalidades para adicionar/remover itens do carrinho.

6. **Passo 6: Estilizar o Site**
   - Aplique um estilo simples, usando **CSS** ou **Styled Components**, para tornar a interface agradável.

7. **Passo 7: Teste a Funcionalidade**
   - Verifique se os produtos são adicionados ao carrinho corretamente.
   - Teste se a navegação entre as páginas e o gerenciamento do carrinho funcionam bem.

---

### Requisitos Adicionais

- **Validação**: O código deve ser bem organizado e comentado, e deve ser fácil de entender para outra pessoa que revise.
- **Responsividade**: O site deve ser responsivo, ou seja, deve funcionar bem em dispositivos móveis.

---

### Desafio Extra (Opcional)

- **Implementação de uma API real**: Substitua os produtos fictícios por produtos vindos de uma API real, como a **Fake Store API**.
- **Adicionar funcionalidades de pagamento**: Crie uma página simulando o checkout, onde o usuário pode finalizar a compra (não precisa integrar um sistema de pagamento real).

---

### Avaliação

O sucesso do desafio será medido com base nos seguintes critérios:

- **Funcionalidade**: O site deve exibir produtos e permitir a interação com o carrinho.
- **Organização do Código**: O código deve ser modular e bem organizado.
- **Design e Experiência do Usuário**: O site deve ser visualmente agradável e fácil de usar.
- **Criatividade**: Qualquer funcionalidade extra ou design inovador será considerado um bônus.

Boa sorte, e divirta-se criando seu site de exibição de produtos!