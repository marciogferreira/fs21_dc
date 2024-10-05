# Guia Básico de Flexbox

O **Flexbox** é um sistema de layout em CSS3 que facilita a criação de layouts flexíveis e dinâmicos. Ele permite alinhar, distribuir e organizar os elementos de forma eficiente, independentemente do tamanho ou da quantidade de itens dentro de um contêiner.

Neste guia, abordaremos os conceitos básicos do Flexbox e como utilizá-lo para criar layouts modernos e responsivos.

## Índice

1. [O que é Flexbox?](#o-que-é-flexbox)
2. [Propriedades principais do Flexbox](#propriedades-principais-do-flexbox)
3. [Exemplo básico](#exemplo-básico)
4. [Propriedades de container](#propriedades-de-container)
5. [Propriedades de itens flexíveis](#propriedades-de-itens-flexíveis)

---

## O que é Flexbox?

Flexbox (Flexible Box Layout) é um modelo de layout unidimensional que organiza elementos em uma única linha (linha principal) ou coluna (coluna principal). Ele é muito útil para criar layouts responsivos, onde os itens se ajustam automaticamente ao espaço disponível.

### Vantagens do Flexbox:
- Alinhamento fácil e eficiente de itens.
- Distribuição dinâmica de espaço entre os elementos.
- Suporte para layouts responsivos sem a necessidade de floats ou posicionamento absoluto.

## Propriedades principais do Flexbox

O Flexbox utiliza dois tipos principais de elementos:

- **Flex Container**: O elemento que envolve os itens flexíveis.
- **Flex Items**: Os elementos internos do container flexível que são distribuídos e organizados.

### Exemplo básico

Aqui está um exemplo básico de um layout usando Flexbox:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo de Flexbox</title>
  <style>
    .container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100vh;
    }

    .item {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
      width: 100px;
      margin: 10px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

</body>
</html>
```

Neste exemplo:
- O **container** usa `display: flex` para ativar o comportamento Flexbox.
- Os itens são centralizados verticalmente e distribuídos horizontalmente com `justify-content: space-around`.

## Propriedades de container

Estas são as principais propriedades usadas no **Flex Container**:

- **display: flex**: Ativa o comportamento flexível para o contêiner.
- **flex-direction**: Define a direção dos itens flexíveis.
  - `row` (padrão): Alinha os itens em uma linha.
  - `column`: Alinha os itens em uma coluna.
  - Exemplo: `flex-direction: row;`

- **justify-content**: Define como os itens são distribuídos ao longo da linha principal (horizontalmente, se `flex-direction` for `row`).
  - `flex-start`: Itens alinhados à esquerda.
  - `center`: Itens centralizados.
  - `space-between`: Espaço igual entre os itens.
  - Exemplo: `justify-content: space-between;`

- **align-items**: Define como os itens são alinhados ao longo da linha cruzada (verticalmente, se `flex-direction` for `row`).
  - `flex-start`: Itens alinhados ao topo.
  - `center`: Itens alinhados ao centro.
  - Exemplo: `align-items: center;`

- **flex-wrap**: Define se os itens devem ou não quebrar para uma nova linha quando o espaço não for suficiente.
  - `nowrap` (padrão): Itens não quebram.
  - `wrap`: Itens quebram para a próxima linha, se necessário.
  - Exemplo: `flex-wrap: wrap;`

## Propriedades de itens flexíveis

Estas são as principais propriedades aplicadas aos **itens flexíveis**:

- **flex-grow**: Define a capacidade do item de crescer e ocupar o espaço disponível.
  - `0`: O item não cresce.
  - Exemplo: `flex-grow: 1;` (O item cresce proporcionalmente ao espaço disponível)

- **flex-shrink**: Define a capacidade do item de encolher, se necessário.
  - `0`: O item não encolhe.
  - Exemplo: `flex-shrink: 1;` (O item encolhe proporcionalmente)

- **flex-basis**: Define o tamanho inicial do item antes de ele crescer ou encolher.
  - Exemplo: `flex-basis: 200px;` (O item começa com 200px de largura)

- **order**: Controla a ordem de exibição dos itens flexíveis. O valor padrão é `0`.
  - Exemplo: `order: 1;` (Itens com `order` maior aparecem depois)

## Conclusão

O Flexbox é uma poderosa ferramenta para criar layouts flexíveis e responsivos de forma eficiente. Com as propriedades certas, você pode controlar a disposição dos elementos, a distribuição do espaço e o alinhamento dos itens com facilidade. Este guia básico cobriu os conceitos principais, mas há muito mais que pode ser feito com Flexbox, como layouts mais avançados e aninhados.

Para mais informações, consulte a [documentação do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

