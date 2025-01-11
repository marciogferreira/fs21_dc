# Desafio de JavaScript: Formulário de Cadastro com Consulta de CEP

Neste desafio, você criará um formulário de cadastro que permite registrar informações de uma pessoa e seu endereço. O objetivo é exercitar conhecimentos de JavaScript, manipulação de DOM, uso da API Via CEP, armazenamento no `localStorage` e exibição de dados em uma outra página.

## Requisitos do Desafio

1. **Formulário de Cadastro**:
   - O formulário deve conter os seguintes campos para os dados pessoais:
     - Nome
     - E-mail
     - Telefone
   - E os seguintes campos para o endereço:
     - CEP
     - Rua
     - Bairro
     - Cidade
     - Estado

2. **Consulta de CEP**:
   - Quando o usuário digitar o CEP, o sistema deve consultar a API Via CEP (https://viacep.com.br/) e preencher automaticamente os campos de Rua, Bairro, Cidade e Estado.

3. **Salvar no LocalStorage**:
   - Ao clicar no botão de salvar, as informações devem ser armazenadas no `localStorage`.
   - Os dados devem ser salvos como um array de objetos, onde cada objeto representa um cadastro (pessoa + endereço).

4. **Exibição dos Dados**:
   - Crie uma segunda página onde todos os cadastros salvos no `localStorage` sejam exibidos em uma tabela.
   - A tabela deve conter os campos de dados pessoais e endereço.

## Instruções

### Passo 1: Estrutura do Projeto
- Crie um diretório para o projeto com os seguintes arquivos:
  - `index.html`: Contém o formulário de cadastro.
  - `cadastros.html`: Exibe os dados cadastrados.
  - `styles.css`: Para estilização das páginas (opcional).
  - `script.js`: Contém toda a lógica em JavaScript para as funcionalidades.

### Passo 2: Funcionalidades do Formulário (index.html)
1. Implemente a estrutura do formulário no `index.html`.
2. Use JavaScript no `script.js` para:
   - Fazer uma requisição à API Via CEP para buscar os dados do endereço.
   - Salvar os dados preenchidos no `localStorage` ao clicar no botão de salvar.

### Passo 3: Exibição dos Dados (cadastros.html)
1. Use JavaScript no `script.js` para:
   - Ler os dados do `localStorage`.
   - Exibi-los em uma tabela dentro da página `cadastros.html`.

## Dicas

- Para consultar a API Via CEP, use o endpoint:
  ```
  https://viacep.com.br/ws/{CEP}/json/
  ```
  Substitua `{CEP}` pelo valor do CEP informado pelo usuário.

- Exemplo de chamada à API Via CEP com `fetch`:
  ```javascript
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Preencha os campos do formulário com os dados retornados
    })
    .catch(error => console.error('Erro ao buscar o CEP:', error));
  ```

- Para salvar no `localStorage`:
  ```javascript
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  cadastros.push(novoCadastro);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));
  ```

- Para exibir os dados em uma tabela:
  ```javascript
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  cadastros.forEach(cadastro => {
    // Crie elementos de tabela dinamicamente e preencha com os dados
  });
  ```

## Critérios de Avaliação

- Uso correto da API Via CEP para consulta de endereços.
- Armazenamento correto dos dados no `localStorage`.
- Exibição clara e organizada dos dados cadastrados.
- Código limpo e bem estruturado.

Boa sorte e divirta-se com o desafio! 🚀
