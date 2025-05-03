
---

## 📚 Formas Normais na Normalização de Banco de Dados

### ✅ 1ª Forma Normal (1FN) – Eliminar Repetições

**Regras:**

* Todos os atributos devem conter **valores atômicos** (não divisíveis).
* Nada de listas ou colunas multivaloradas.

**Exemplo incorreto:**

```plaintext
Aluno (id, nome, telefones) --> "1111, 2222"
```

**Exemplo correto:**

```plaintext
Aluno (id, nome)
Telefone (id_aluno, telefone)
```

---

### ✅ 2ª Forma Normal (2FN) – Remover Dependências Parciais

**Pré-requisito:** Estar na **1FN**

**Regras:**

* Todos os atributos **não-chave** devem depender **da chave primária completa**, e não de uma parte dela (em chaves compostas).

**Exemplo problema:**

```plaintext
CursoAluno (id_curso, id_aluno, nome_aluno)
```

**Solução:**

* Separar `nome_aluno` em outra tabela, pois ele depende apenas de `id_aluno`.

---

### ✅ 3ª Forma Normal (3FN) – Eliminar Dependências Transitivas

**Pré-requisito:** Estar na **2FN**

**Regras:**

* Um atributo **não-chave não deve depender de outro atributo não-chave**.

**Exemplo problema:**

```plaintext
Funcionario (id, nome, id_departamento, nome_departamento)
```

**Solução:**

* Criar uma tabela `Departamento (id_departamento, nome_departamento)`

---

### ✅ Forma Normal de Boyce-Codd (BCNF)

**Pré-requisito:** Estar na **3FN**

**Regras:**

* Para **todas as dependências funcionais**, o lado esquerdo deve ser uma **superchave**.

> Em muitos casos, a **BCNF** e a **3FN** coincidem, mas a BCNF é mais rigorosa.

---

### ✅ 4ª Forma Normal (4FN)

**Regras:**

* Elimina **dependências multivaloradas**.
* Evita que duas ou mais listas independentes de um mesmo registro fiquem na mesma tabela.

---

### ✅ 5ª Forma Normal (5FN) – Forma Normal de Junção

**Regras:**

* Evita **anomalias de junção**.
* Divide relações complexas para preservar **dependências de junção**.

---

### 🛡️ DKNF – Forma Normal Baseada em Domínio e Chave

* Forma mais avançada.
* Todos os tipos de restrições (de chave, domínio e negócio) são aplicadas **somente com base em domínios e chaves**.

---
