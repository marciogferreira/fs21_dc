

---

## 🔌 Conexão com Banco de Dados

### ✅ O que é?

A **conexão com o banco de dados** permite que uma aplicação envie comandos SQL para inserir, consultar, atualizar e excluir dados armazenados em um SGBD (como PostgreSQL, MySQL, etc.).

---

### ⚙️ Componentes de uma Conexão

Para se conectar, você geralmente precisa de:

| Componente         | Descrição                                             |
| ------------------ | ----------------------------------------------------- |
| **Host**           | Endereço do servidor (ex: `localhost`)                |
| **Porta**          | Porta padrão (PostgreSQL: `5432`)                     |
| **Banco de Dados** | Nome do banco a ser acessado                          |
| **Usuário**        | Nome do usuário                                       |
| **Senha**          | Senha desse usuário                                   |
| **Driver**         | Biblioteca usada para conectar (ex: `psycopg2`, JDBC) |

---

### 🧪 Exemplo de Conexão com PostgreSQL (Python + psycopg2)

```python
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    dbname="meubanco",
    user="meuusuario",
    password="minhasenha"
)

cursor = conn.cursor()
cursor.execute("SELECT * FROM clientes;")
resultados = cursor.fetchall()
print(resultados)
conn.close()
```

---

### 🧩 Em outros ambientes:

* **Java** (via JDBC):

```java
Connection conn = DriverManager.getConnection(
  "jdbc:postgresql://localhost:5432/meubanco", "usuario", "senha"
);
```

* **PHP** (via PDO):

```php
$pdo = new PDO("pgsql:host=localhost;dbname=meubanco", "usuario", "senha");
```

* **Node.js** (via `pg`):

```js
const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'meubanco'
});
await client.connect();
```

---

### 🛡️ Boas práticas

* **Nunca** exponha senhas em código.
* Use **variáveis de ambiente** para dados sensíveis.
* Sempre **feche conexões** após o uso.
* Use **pools de conexões** em aplicações com alto volume de acesso.

---
