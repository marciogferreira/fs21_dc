
---

## 🧱 ORM em Banco de Dados e JavaScript

### ✅ O que é ORM?

ORM (Object-Relational Mapping) é uma técnica que permite interagir com o banco de dados usando **objetos e classes**, sem escrever SQL diretamente.

* Ele **mapeia tabelas** para **classes**
* E **registros (linhas)** para **objetos**

---

### 🎯 Vantagens do ORM

* Código mais limpo e legível
* Reutilização de modelos (classes)
* Redução de erros de SQL
* Portabilidade entre SGBDs
* Facilita validações, relacionamentos e migrações

---

### 🛠️ ORMs populares em JavaScript (Node.js)

| ORM              | Banco Suportado                 | Observações                  |
| ---------------- | ------------------------------- | ---------------------------- |
| **Sequelize**    | PostgreSQL, MySQL, SQLite, etc. | O mais conhecido             |
| **TypeORM**      | PostgreSQL, MySQL, MariaDB      | Focado em TypeScript         |
| **Prisma**       | PostgreSQL, MySQL, SQLite       | Abordagem moderna, tipado    |
| **Objection.js** | PostgreSQL, MySQL               | Usa Knex por baixo dos panos |

---

### 📦 Exemplo com Sequelize

#### 1. Instalação:

```bash
npm install sequelize pg pg-hstore
```

#### 2. Configuração:

```js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('meubanco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});
```

#### 3. Definição de modelo:

```js
const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  }
});
```

#### 4. Sincronização e uso:

```js
(async () => {
  await sequelize.sync(); // Cria a tabela, se não existir
  await Cliente.create({ nome: "Ana", email: "ana@email.com" });
  const clientes = await Cliente.findAll();
  console.log(clientes);
})();
```

---

### ⚖️ ORM vs SQL puro

| ORM                        | SQL Puro                     |
| -------------------------- | ---------------------------- |
| Mais produtivo no início   | Mais controle e performance  |
| Ótimo para projetos médios | Ideal para sistemas críticos |
| Mais abstração             | Mais verboso, mas direto     |

---