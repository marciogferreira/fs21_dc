---

## 🎯 Desafio: Sistema de Biblioteca Universitária

### 📝 Descrição do Desafio

A universidade precisa de um sistema para **gerenciar o empréstimo de livros** da biblioteca para alunos e professores.

Você deve **modelar o banco de dados** que permita armazenar informações sobre:

* Livros disponíveis
* Autores e editoras
* Alunos e professores cadastrados
* Empréstimos e devoluções
* Funcionários da biblioteca que realizam os atendimentos

---

### 🔍 Requisitos Funcionais

1. Cada livro pode ter **um ou mais autores**.
2. Um autor pode ter escrito **vários livros**.
3. Os livros podem ser emprestados para **alunos ou professores**.
4. Cada empréstimo deve registrar:

   * Quem pegou o livro (aluno ou professor)
   * Qual livro foi emprestado
   * Data do empréstimo e data prevista de devolução
   * Funcionário que realizou o empréstimo
5. O sistema deve evitar que:

   * Um livro seja emprestado se já estiver emprestado
   * Um aluno tenha mais de 5 livros ao mesmo tempo

---

### 📌 Tarefas

1. **Identifique as entidades** e seus atributos.
2. **Modele os relacionamentos** entre as entidades (1:1, 1\:N, N\:N).
3. **Aplique as formas normais** até a 3FN.
4. **Crie o DER (Diagrama Entidade-Relacionamento)**.
5. **Implemente as tabelas** no PostgreSQL com `CREATE TABLE`.
6. **Insira alguns dados** com `INSERT INTO`.
7. (Opcional) Crie **algumas consultas** com `SELECT` para:

   * Livros emprestados no momento
   * Alunos com mais de 3 empréstimos ativos
   * Histórico de empréstimos de um livro

---

### 📁 Entrega Esperada

* DER (desenhado no papel ou usando ferramentas como dbdiagram.io, Draw\.io etc.)
* Script `.sql` com criação de tabelas e inserção de dados
* Consultas SQL em um arquivo separado

---