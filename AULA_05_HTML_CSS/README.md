# Introdução ao CSS

CSS (Cascading Style Sheets) é uma linguagem utilizada para estilizar elementos HTML em uma página web. Ele permite separar o conteúdo HTML da apresentação visual, tornando o código mais organizado e flexível. Com o CSS, é possível alterar cores, fontes, layouts e outros aspectos visuais dos elementos da página.

Existem três formas principais de adicionar CSS a um documento HTML: **CSS Inline**, **CSS Interno** e **CSS Externo**.

## CSS Inline

O CSS inline é inserido diretamente nos elementos HTML usando o atributo `style`. Esta abordagem é geralmente usada para aplicar estilos específicos a um único elemento e tem a maior prioridade em relação a outros tipos de CSS.

### Exemplo:
```html
<p style="color: blue; font-size: 18px;">Texto em azul com fonte de 18px.</p>
```

**Vantagens:**
- Aplicação rápida de estilos a um único elemento.
- Útil para pequenas mudanças pontuais.

**Desvantagens:**
- Difícil de manter em grandes projetos, já que os estilos estão misturados com o HTML.
- Não promove a reutilização do código CSS.

## CSS Interno

O CSS interno é definido dentro da própria página HTML, no elemento `<style>` dentro do `<head>`. Ele é útil quando os estilos são específicos para uma única página.

### Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <p>Este texto será vermelho com fonte de 20px.</p>
</body>
</html>
```

**Vantagens:**
- Bom para páginas únicas ou estilos específicos de uma página.
- Facilita a visualização e edição dos estilos diretamente na página HTML.

**Desvantagens:**
- Não promove a reutilização dos estilos em outras páginas.
- Em grandes projetos, pode dificultar a manutenção do código.

## CSS Externo

O CSS externo é escrito em um arquivo separado com extensão `.css`. Esse arquivo é vinculado à página HTML usando a tag `<link>`, o que permite aplicar o mesmo conjunto de estilos a várias páginas web.

### Exemplo:
```html
<!-- HTML -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Este texto será estilizado com regras externas.</p>
</body>
</html>
```

```css
/* Arquivo styles.css */
p {
  color: green;
  font-size: 22px;
}
```

**Vantagens:**
- Promove a reutilização de código, pois o mesmo arquivo CSS pode ser usado em várias páginas.
- Facilita a manutenção e organização de projetos maiores.

**Desvantagens:**
- Depende de uma solicitação HTTP extra para carregar o arquivo CSS, o que pode afetar o desempenho em redes lentas.
- Estilos externos têm menor prioridade em relação ao CSS inline e interno.

## Hierarquia de Aplicação (Cascata)

Quando vários estilos são aplicados a um elemento, o CSS segue uma hierarquia de prioridade conhecida como cascata. A prioridade dos estilos é determinada da seguinte forma:
1. CSS Inline (mais forte)
2. CSS Interno
3. CSS Externo (menos forte)

Essa hierarquia permite combinar diferentes fontes de estilo, sendo o CSS externo uma solução eficiente para projetos maiores e mais complexos.

## Conclusão

Cada uma dessas abordagens de CSS tem suas vantagens e desvantagens, e a escolha da melhor forma depende das necessidades específicas do projeto. Para pequenas mudanças, o CSS inline pode ser útil, enquanto o CSS externo é preferível para projetos maiores, onde a manutenção e reutilização de código são importantes.
