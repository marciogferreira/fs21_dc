# Arrays e Métodos em JavaScript

Arrays são estruturas fundamentais em JavaScript que permitem armazenar e manipular coleções de dados. Um array é uma lista ordenada de valores, onde cada valor é identificado por um índice numérico.

## Criando Arrays

Você pode criar arrays em JavaScript de várias formas:

```javascript
// Usando colchetes
let frutas = ["maçã", "banana", "laranja"];

// Usando o construtor Array
let numeros = new Array(1, 2, 3, 4);
```

## Acessando Elementos

Os elementos do array são acessados usando índices, que começam em `0`.

```javascript
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
```

## Arrays de Objetos

Arrays também podem conter objetos, tornando-os úteis para armazenar coleções de dados complexos.

### Exemplo de Array de Objetos

```javascript
let usuarios = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Carol", idade: 22 }
];
```

### Acessando Propriedades dos Objetos

Você pode acessar as propriedades dos objetos no array utilizando índices e o operador ponto (`.`).

```javascript
console.log(usuarios[0].nome); // "Alice"
console.log(usuarios[1].idade); // 30
```

### Iterando Sobre Arrays de Objetos

#### Usando `for`
O loop `for` permite iterar sobre os elementos de um array de maneira controlada.

```javascript
for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} tem ${usuarios[i].idade} anos.`);
}
```

#### Usando `for...of`
O loop `for...of` é uma alternativa mais legível para iterar sobre os elementos de um array.

```javascript
for (let usuario of usuarios) {
  console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
}
```

#### Usando `forEach`

```javascript
usuarios.forEach((usuario) => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
});
```

## Principais Métodos de Arrays

### Adicionar e Remover Elementos

#### `push`
Adiciona um ou mais elementos ao final do array.

```javascript
frutas.push("uva");
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]
```

#### `pop`
Remove o último elemento do array e o retorna.

```javascript
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "uva"
console.log(frutas); // ["maçã", "banana", "laranja"]
```

#### `unshift`
Adiciona um ou mais elementos ao início do array.

```javascript
frutas.unshift("morango");
console.log(frutas); // ["morango", "maçã", "banana", "laranja"]
```

#### `shift`
Remove o primeiro elemento do array e o retorna.

```javascript
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // "morango"
console.log(frutas); // ["maçã", "banana", "laranja"]
```

### Iteração

#### `forEach`
Executa uma função para cada elemento do array.

```javascript
frutas.forEach((fruta) => {
  console.log(fruta);
});
```

#### `map`
Cria um novo array com os resultados da função aplicada a cada elemento.

```javascript
let frutasMaiusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasMaiusculas); // ["MAÇÃ", "BANANA", "LARANJA"]
```

### Filtragem e Busca

#### `filter`
Cria um novo array com elementos que passam em um teste.

```javascript
let frutasComA = frutas.filter((fruta) => fruta.includes("a"));
console.log(frutasComA); // ["maçã", "banana", "laranja"]
```

#### `find`
Retorna o primeiro elemento que satisfaz o teste.

```javascript
let frutaEncontrada = frutas.find((fruta) => fruta.startsWith("b"));
console.log(frutaEncontrada); // "banana"
```

### Outros Métodos Úteis

#### `reduce`
Aplica uma função a um acumulador e cada elemento do array para reduzir a um único valor.

```javascript
let totalCaracteres = frutas.reduce((total, fruta) => total + fruta.length, 0);
console.log(totalCaracteres); // Soma dos caracteres das frutas
```

#### `sort`
Ordena os elementos do array.

```javascript
frutas.sort();
console.log(frutas); // ["banana", "laranja", "maçã"]
```

#### `reverse`
Inverte a ordem dos elementos no array.

```javascript
frutas.reverse();
console.log(frutas); // ["maçã", "laranja", "banana"]
```

## Conclusão

Os arrays são extremamente versáteis e podem ser manipulados de diversas formas para atender às necessidades do desenvolvedor. Dominar seus métodos é essencial para trabalhar eficientemente com dados em JavaScript.
