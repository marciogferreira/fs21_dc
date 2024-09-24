# Desafio CSS Básico: Montando um Layout Simples

Neste desafio, você vai utilizar seus conhecimentos de CSS para criar um layout básico de uma página web. O objetivo é praticar a organização e aplicação de CSS, criando um layout com cabeçalho, navegação, conteúdo principal e rodapé.

## Objetivo

Você deve criar uma página que atenda aos seguintes requisitos:

1. **Cabeçalho**: Deve conter o título da página e um fundo colorido.
2. **Barra de navegação**: Deve ter links para três seções fictícias.
3. **Conteúdo principal**: Um texto sobre qualquer assunto que você escolher, acompanhado de uma imagem.
4. **Rodapé**: Um texto com seus direitos autorais.

## Requisitos

- Crie um arquivo `index.html` e um arquivo `style.css`.
- Utilize **CSS externo** para estilizar a página.
- O layout deve ser responsivo, ajustando-se corretamente a diferentes tamanhos de tela.
- Utilize **flexbox** ou **grid layout** para organizar os elementos no conteúdo principal.

## Estrutura esperada

### 1. Cabeçalho
- Deve ser uma seção na parte superior da página com uma cor de fundo.
- O título deve estar centralizado e ter um tamanho de fonte maior que o texto normal.

### 2. Barra de navegação
- Logo abaixo do cabeçalho, a barra de navegação deve conter 3 links para as seções: "Início", "Sobre" e "Contato".
- Deve ter um fundo contrastante e os links devem mudar de cor ao passar o mouse (hover).

### 3. Conteúdo principal
- A área de conteúdo principal deve ser dividida em duas colunas:
  - A primeira coluna deve conter o texto.
  - A segunda coluna deve conter uma imagem.
- Em telas menores, as colunas devem se reorganizar para aparecerem uma abaixo da outra.

### 4. Rodapé
- Deve conter uma cor de fundo diferente do cabeçalho e um texto centralizado com uma mensagem simples, como "Todos os direitos reservados".

## Instruções de Estilo

Você deve aplicar os seguintes estilos mínimos:

- **Cor de fundo do corpo**: `#f0f0f0`
- **Cabeçalho**: Cor de fundo `#4CAF50`, cor do texto `#fff`
- **Navegação**: Cor de fundo `#333`, links com cor de texto `#fff`, e cor de texto ao hover `#4CAF50`
- **Fonte**: Utilize a fonte `"Arial", sans-serif` para toda a página.
- **Rodapé**: Cor de fundo `#222`, cor do texto `#ccc`.

## Exemplo de Layout

Aqui está um exemplo visual simples do que se espera, mas você tem liberdade criativa para ajustar o design:

```
+-----------------------------------------------------+
|                    Cabeçalho                        |
|               Título da Página Aqui                 |
+-----------------------------------------------------+
|  Início  |  Sobre  |  Contato                       |
+-----------------------------------------------------+
|  Texto sobre algum assunto      |      [Imagem]     |
|  (coluna 1)                     |      (coluna 2)   |
+-----------------------------------------------------+
|                  Rodapé: Todos os direitos reservados |
+-----------------------------------------------------+
```

## Passos para realizar o desafio

1. **HTML**:
   - Crie a estrutura básica de um documento HTML.
   - Adicione as tags necessárias para cada parte do layout (cabeçalho, navegação, conteúdo, rodapé).

2. **CSS**:
   - Crie um arquivo `style.css` e vincule-o ao HTML.
   - Aplique os estilos conforme as instruções fornecidas.
   - Utilize flexbox ou grid layout para organizar as colunas no conteúdo principal.

3. **Testar**:
   - Verifique se o layout se ajusta corretamente em telas menores (dispositivos móveis).
   - Aplique hover nos links da navegação.

## Extras (Opcional)

- Adicione **efeitos de transição** ao hover nos links para tornar a mudança de cor mais suave.
- Adicione **media queries** para melhorar o layout responsivo em diferentes resoluções.
- Utilize **Google Fonts** para adicionar uma fonte personalizada à página.

## Entrega

Quando terminar o desafio, certifique-se de testar em diferentes navegadores e tamanhos de tela. Compartilhe o código em um repositório no GitHub e envie o link!

Boa sorte!
