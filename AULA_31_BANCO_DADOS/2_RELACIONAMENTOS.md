

---

## 🔗 Relacionamentos em Banco de Dados

Relacionamentos definem **como tabelas se associam** e são a base dos modelos **relacionais**.

---

### 📌 Tipos de Relacionamento

---

### 1. **Um para Um (1:1)**

* Uma entidade A se relaciona com **no máximo uma** entidade B, e vice-versa.
* Exemplo:

  * Pessoa ↔ Passaporte

    * Cada pessoa tem um único passaporte.
    * Cada passaporte pertence a uma única pessoa.

**Implementação:**

```sql
CREATE TABLE pessoa (
  id SERIAL PRIMARY KEY,
  nome TEXT
);

CREATE TABLE passaporte (
  id SERIAL PRIMARY KEY,
  numero TEXT UNIQUE,
  pessoa_id INTEGER UNIQUE REFERENCES pessoa(id)
);
```

---

### 2. **Um para Muitos (1\:N)**

* Uma entidade A se relaciona com **múltiplas** entidades B.
* Exemplo:

  * Cliente → Pedidos

    * Um cliente pode fazer muitos pedidos.
    * Cada pedido pertence a um único cliente.

**Implementação:**

```sql
CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome TEXT
);

CREATE TABLE pedido (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER REFERENCES cliente(id)
);
```

---

### 3. **Muitos para Muitos (N\:N)**

* Múltiplas entidades A se relacionam com múltiplas entidades B.
* Exemplo:

  * Alunos ↔ Disciplinas

    * Um aluno pode cursar várias disciplinas.
    * Uma disciplina pode ter vários alunos.

**Solução:** Criar uma **tabela associativa** (tabela de junção)

```sql
CREATE TABLE aluno (
  id SERIAL PRIMARY KEY,
  nome TEXT
);

CREATE TABLE disciplina (
  id SERIAL PRIMARY KEY,
  nome TEXT
);

CREATE TABLE aluno_disciplina (
  aluno_id INTEGER REFERENCES aluno(id),
  disciplina_id INTEGER REFERENCES disciplina(id),
  PRIMARY KEY (aluno_id, disciplina_id)
);
```

---

### 🔍 Relacionamentos também podem ter:

* **Cardinalidade** (1:1, 1\:N, N\:N)
* **Participação**: Total (obrigatória) ou Parcial (opcional)
* **Atributos próprios** (ex: nota no relacionamento entre aluno e disciplina)

---
