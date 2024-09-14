# Desafio: Criando uma Tabela de Listagem de Alunos e Formulário de Cadastro

## Objetivo

O objetivo deste desafio é praticar a criação de tabelas e formulários em HTML. Você vai criar uma página simples que contém:
1. Uma tabela listando os alunos com suas informações.
2. Um formulário de cadastro para adicionar novos alunos.

## Instruções

1. Crie um arquivo chamado `index.html`.
2. No arquivo `index.html`, você deve implementar:
   - Uma **tabela** que liste os alunos.
   - Um **formulário de cadastro** de novos alunos.

## Requisitos

### Tabela de Alunos

A tabela deverá listar os seguintes dados de cada aluno:
- **ID**: Um número identificador para o aluno.
- **Nome**: O nome completo do aluno.
- **Idade**: A idade do aluno.
- **Turma**: A turma em que o aluno está matriculado.

A tabela deve ter um cabeçalho e pelo menos 3 linhas de alunos de exemplo.

### Formulário de Cadastro de Alunos

O formulário deverá conter os seguintes campos:
- **Nome do Aluno** (campo de texto)
- **Idade** (campo de número)
- **Turma** (campo de texto)
- Um botão para **Cadastrar Aluno**

Obs: O formulário não precisa ser funcional (não precisa enviar dados), apenas a estrutura HTML é necessária.

### Estrutura do Projeto

```
/seu_projeto
│
└── index.html
```

## Exemplo de Estrutura Esperada

Aqui está um exemplo básico de como a estrutura do HTML pode ser:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Alunos</title>
</head>
<body>

    <h1>Listagem de Alunos</h1>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>João Silva</td>
                <td>15</td>
                <td>9A</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Maria Souza</td>
                <td>16</td>
                <td>10B</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Carlos Oliveira</td>
                <td>14</td>
                <td>8C</td>
            </tr>
        </tbody>
    </table>

    <h1>Cadastro de Novo Aluno</h1>
    <form>
        <label for="nome">Nome do Aluno:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="idade">Idade:</label>
        <input type="number" id="idade" name="idade" required><br><br>

        <label for="turma">Turma:</label>
        <input type="text" id="turma" name="turma" required><br><br>

        <button type="submit">Cadastrar Aluno</button>
    </form>

</body>
</html>
```

## Desafios Adicionais (Opcional)

- Adicione um campo de **e-mail** no formulário de cadastro.
- Adicione um cabeçalho de título para a tabela e para o formulário com tags `<h1>`.
- Use o atributo `placeholder` nos campos do formulário para dar dicas ao usuário.
- Crie mais linhas na tabela com alunos fictícios para praticar o preenchimento manual de tabelas.

## Como Usar

1. Crie o arquivo `index.html` e cole a estrutura fornecida ou crie o seu próprio código com base nos requisitos.
2. Abra o arquivo no navegador para visualizar a tabela e o formulário.
3. O formulário pode ser preenchido, mas como não há backend ou JavaScript, os dados não serão enviados. O foco é na estruturação com HTML.
