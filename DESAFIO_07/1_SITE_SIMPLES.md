
# Como criar um site simples com header, sidebar, footer e layout básico

Este guia explica como criar um site simples usando HTML e CSS, com um layout básico contendo um **header**, **sidebar**, **main content**, e **footer**. O site será estilizado com largura e altura fixas para os elementos principais.

## Estrutura básica de arquivos

Você precisará de dois arquivos:

1. **index.html** - Este arquivo conterá a estrutura HTML do site.
2. **style.css** - Este arquivo conterá os estilos CSS para layout e design.

## Passo 1: Criação do arquivo HTML (index.html)

Aqui está a estrutura básica do seu arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site Simples</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Cabeçalho -->
  <header>
    <h1>Meu Site Simples</h1>
  </header>

  <div class="container">
    <!-- Barra lateral -->
    <aside>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </aside>

    <!-- Conteúdo principal -->
    <main>
      <h2>Bem-vindo!</h2>
      <p>Este é um exemplo de site simples com layout básico.</p>
    </main>
  </div>

  <!-- Rodapé -->
  <footer>
    <p>Copyright &copy; 2024 - Todos os direitos reservados</p>
  </footer>

</body>
</html>
```

## Passo 2: Criação do arquivo CSS (style.css)

Agora, vamos criar o arquivo `style.css` para estilizar nosso layout.

```css
/* Resetando estilos padrão */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilizando o corpo */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
}

/* Estilizando o cabeçalho */
header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

header h1 {
  margin: 0;
}

/* Estilizando a área do container */
.container {
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
}

/* Estilizando a barra lateral */
aside {
  width: 250px;
  background-color: #ddd;
  padding: 20px;
}

aside ul {
  list-style: none;
}

aside ul li {
  margin-bottom: 10px;
}

aside ul li a {
  text-decoration: none;
  color: #333;
}

/* Estilizando o conteúdo principal */
main {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  margin-left: 20px;
}

/* Estilizando o rodapé */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
```

## Explicação do layout

- **Header**: O cabeçalho tem uma cor de fundo escura e um texto branco, centralizado.
- **Sidebar**: A barra lateral ocupa 250px de largura e contém uma lista de links.
- **Main Content**: A área de conteúdo principal é flexível (`flex: 1`), ajustando-se ao restante da largura disponível.
- **Footer**: O rodapé é fixado na parte inferior da página e tem uma cor de fundo escura com texto branco.

## Passo 3: Abrir o arquivo no navegador

Após criar os dois arquivos (`index.html` e `style.css`), abra o arquivo `index.html` no navegador. Você verá um site simples com um cabeçalho, barra lateral, conteúdo principal e rodapé.

