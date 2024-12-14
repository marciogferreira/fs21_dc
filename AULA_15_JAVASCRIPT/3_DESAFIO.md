# Desafio: Gerenciador de Produtos

## Objetivo
Criar uma aplicação simples que exiba uma lista de produtos formatada como cards usando HTML, Bootstrap e JavaScript. A lista de produtos deve ser gerada dinamicamente a partir de um array de objetos, utilizando o método `map`.

## Requisitos

### Funcionalidades
1. Exibir uma lista de produtos no formato de cards.
2. Cada card deve mostrar:
   - Nome do produto
   - Descrição
   - Preço
3. Os produtos devem ser gerados dinamicamente a partir de um array de objetos no JavaScript.

### Tecnologias Utilizadas
- **HTML** para estrutura da página.
- **Bootstrap** para estilização e layout responsivo.
- **JavaScript** para manipulação do DOM e uso do método `map`.

### Estrutura Esperada do Objeto de Produtos
```javascript
const produtos = [
  {
    nome: "Smartphone",
    descricao: "Um smartphone moderno com tela AMOLED",
    preco: 1500.00
  },
  {
    nome: "Notebook",
    descricao: "Notebook potente para trabalho e jogos",
    preco: 3500.00
  },
  {
    nome: "Fone de Ouvido",
    descricao: "Fone com cancelamento de ruído ativo",
    preco: 300.00
  }
];
```

## Passos para Implementação

1. **Configuração do HTML:**
   - Crie um arquivo `index.html`.
   - Adicione o CDN do Bootstrap para estilização.
   - Crie uma estrutura básica com um cabeçalho e um contêiner onde os produtos serão exibidos.

2. **Adicionar Estilização com Bootstrap:**
   - Use classes do Bootstrap para o layout responsivo, como `container`, `row`, e `col`.
   - Estilize os cards usando as classes `card`, `card-body`, etc.

3. **Manipulação com JavaScript:**
   - Crie um arquivo `script.js`.
   - Insira o array de objetos no arquivo.
   - Use o método `map` para transformar cada objeto em um card HTML.
   - Insira dinamicamente os cards no contêiner da página.

## Estrutura Básica do Projeto

```
/desafio-gerenciador-produtos
├── index.html
├── script.js
└── style.css (opcional)
```

## Exemplo de Layout Esperado
- Cada produto será exibido em um card com as seguintes informações:
  - **Nome do Produto:** Título no card.
  - **Descrição:** Texto descritivo.
  - **Preço:** Exibido em formato de moeda.

### Exemplo de HTML Gerado Dinamicamente
```html
<div class="col-md-4">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Smartphone</h5>
      <p class="card-text">Um smartphone moderno com tela AMOLED</p>
      <p class="card-text">Preço: R$ 1500.00</p>
    </div>
  </div>
</div>
```

## Desafios Extras
1. Adicione um botão "Comprar" em cada card e exiba um alerta ao clicar nele.
2. Permita que o usuário adicione novos produtos à lista usando um formulário.
3. Ordene os produtos por preço (crescente ou decrescente).

## Resultado Esperado
Uma página interativa e estilizada que exibe uma lista de produtos de forma dinâmica e organizada.
