
---

## 📘 1. **Entidades e Domínios**

### ✅ Entidade

* Uma **entidade** representa um **objeto real ou conceitual** do mundo real sobre o qual queremos armazenar dados.
* Exemplo: `Aluno`, `Produto`, `Pedido`.

### ✅ Atributos

* São **características** ou **propriedades** de uma entidade.
* Exemplo: A entidade `Aluno` pode ter os atributos `matricula`, `nome`, `data_nascimento`.

### ✅ Domínio

* O **domínio** define o **conjunto de valores permitidos** para um atributo.
* Exemplo:

  * Atributo `idade`: domínio pode ser `número inteiro entre 0 e 120`.
  * Atributo `email`: domínio pode ser `texto que segue padrão de e-mail`.

---

## 🧩 2. **Tipos de Domínio no PostgreSQL**

No PostgreSQL, os domínios são **tipos personalizados com restrições**. Você pode usá-los para garantir que um campo sempre siga regras específicas.

### 🔧 Criar um domínio:

```sql
CREATE DOMAIN idade_valida AS INTEGER
CHECK (VALUE >= 0 AND VALUE <= 120);
```

### 🔧 Usar o domínio numa tabela:

```sql
CREATE TABLE pessoa (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  idade idade_valida
);
```

### ✅ Tipos básicos do PostgreSQL:

| Tipo         | Descrição               |
| ------------ | ----------------------- |
| `INTEGER`    | Números inteiros        |
| `TEXT`       | Texto ilimitado         |
| `VARCHAR(n)` | Texto com limite de `n` |
| `DATE`       | Datas                   |
| `BOOLEAN`    | Verdadeiro/Falso        |
| `NUMERIC`    | Números decimais        |
| `UUID`       | Identificador universal |

---

## 🏗️ 3. **Como criar uma tabela no PostgreSQL**

```sql
CREATE TABLE aluno (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email TEXT UNIQUE,
  data_nascimento DATE,
  ativo BOOLEAN DEFAULT true
);
```

* `SERIAL`: cria um número inteiro auto-incremental
* `PRIMARY KEY`: identificador único
* `UNIQUE`: impede duplicidade
* `DEFAULT`: valor padrão se não for informado

---

## ⚙️ 4. **Categorias de Comandos SQL**

### 📐 DDL – *Data Definition Language*

Define estrutura do banco:

```sql
CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE DOMAIN
```

### 🧪 DML – *Data Manipulation Language*

Manipula dados:

```sql
INSERT, UPDATE, DELETE
```

### 🔍 DQL – *Data Query Language*

Consulta dados:

```sql
SELECT
```

### 🔒 DCL – *Data Control Language*

Permissões e segurança:

```sql
GRANT, REVOKE
```

### 🌀 TCL – *Transaction Control Language*

Controle de transações:

```sql
BEGIN, COMMIT, ROLLBACK
```

---
