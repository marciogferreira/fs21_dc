# Tutorial: Montando um Layout Básico com CSS

Neste tutorial, você aprenderá a montar um layout básico de uma página web usando HTML e CSS. Vamos criar uma página com um cabeçalho, barra de navegação, área de conteúdo com duas colunas e um rodapé.

## Objetivo

Ao final deste tutorial, você terá uma página web simples com a seguinte estrutura:

```
+-----------------------------------------------------+
|                    Cabeçalho                        |
+-----------------------------------------------------+
|  Início  |  Sobre  |  Contato                       |
+-----------------------------------------------------+
|  Texto sobre algum assunto      |      [Imagem]     |
|  (coluna 1)                     |      (coluna 2)   |
+-----------------------------------------------------+
|                  Rodapé                              |
+-----------------------------------------------------+
```

## Passo 1: Estrutura Básica em HTML

Primeiro, crie um arquivo chamado `index.html` e adicione a seguinte estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Layout Básico</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Bem-vindo ao Meu Site</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>

    <main>
        <section class="content">
            <div class="text">
                <h2>Seção de Texto</h2>
                <p>Este é um exemplo de texto em uma coluna. Você pode escrever sobre qualquer assunto aqui.</p>
            </div>
            <div class="image">
                <img src="https://via.placeholder.com/150" alt="Imagem Exemplo">
            </div>
        </section>
    </main>

    <footer>
        <p>Todos os direitos reservados - 2024</p>
    </footer>
</body>
</html>
```

Aqui, criamos uma estrutura com:
- **header**: que contém o título da página.
- **nav**: que contém a barra de navegação com links fictícios.
- **main**: que contém o conteúdo principal dividido em duas colunas.
- **footer**: que contém o rodapé da página.

## Passo 2: Estilos CSS Básicos

Agora, crie um arquivo chamado `style.css` para estilizar a página. Vamos aplicar estilos ao layout.

```css
/* Estilos Globais */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

h1, h2 {
    margin: 0;
    padding: 20px 0;
}

a {
    text-decoration: none;
    color: white;
}

/* Estilos do Cabeçalho */
header {
    background-color: #4CAF50;
    text-align: center;
    padding: 20px 0;
    color: white;
}

/* Estilos da Navegação */
nav {
    background-color: #333;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: white;
    padding: 10px;
}

nav ul li a:hover {
    background-color: #4CAF50;
    padding: 10px;
    border-radius: 5px;
}

/* Estilos do Conteúdo Principal */
main {
    display: flex;
    justify-content: space-around;
    margin: 20px;
}

.content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.text {
    width: 60%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.image {
    width: 30%;
}

.image img {
    max-width: 100%;
    height: auto;
}

/* Estilos do Rodapé */
footer {
    background-color: #222;
    color: #ccc;
    text-align: center;
    padding: 10px 0;
    position: relative;
    bottom: 0;
    width: 100%;
}
```

### Explicação dos Estilos:

1. **Globais**: Aplicamos uma fonte padrão e removemos margens e preenchimentos padrão. Definimos um fundo claro para o corpo da página.
2. **Cabeçalho**: O cabeçalho tem um fundo verde (`#4CAF50`), com o texto centralizado e em branco.
3. **Navegação**: A barra de navegação tem um fundo escuro (`#333`), os links estão em branco, e ao passar o mouse (hover), os links mudam de cor e ganham um fundo verde.
4. **Conteúdo**: Utilizamos `flexbox` para alinhar as colunas de texto e imagem no conteúdo principal. O texto ocupa 60% da largura, e a imagem 30%.
5. **Rodapé**: O rodapé tem um fundo preto e o texto centralizado em cinza claro (`#ccc`).

## Passo 3: Testando o Layout Responsivo

Agora vamos melhorar o layout para que fique responsivo em dispositivos móveis. Podemos adicionar uma **media query** para ajustar o layout em telas menores:

```css
/* Layout Responsivo */
@media (max-width: 768px) {
    main {
        flex-direction: column;
        align-items: center;
    }

    .text, .image {
        width: 100%;
        margin-bottom: 20px;
    }
}
```

Aqui, usamos uma **media query** que ajusta o layout para que as colunas de texto e imagem fiquem uma abaixo da outra em telas menores (com largura inferior a 768px).

## Passo 4: Verificando o Resultado

Salve os arquivos e abra o `index.html` no navegador. A página deve exibir:

1. Um cabeçalho com o título.
2. Uma barra de navegação com links que mudam de cor ao passar o mouse.
3. Um conteúdo principal com texto e imagem em duas colunas.
4. Um rodapé fixo com direitos reservados.

## Conclusão
