A seguir, um desafio para criar um jogo de matemática simples utilizando ReactJS com os hooks useState e useEffect. O objetivo é gerar dois números aleatórios, solicitar que o usuário some os valores e, se a resposta estiver correta, exibir um gif de parabéns.

---

### Desafio

1. **Gerar Números Aleatórios:**  
   Crie dois estados (por exemplo, `num1` e `num2`) que armazenem números aleatórios entre 1 e 10. Utilize uma função para gerar novos números sempre que o jogo for iniciado ou reiniciado.

2. **Capturar Resposta do Usuário:**  
   Utilize um estado (por exemplo, `userAnswer`) para armazenar a resposta digitada pelo usuário através de um `<input>`.

3. **Validar a Resposta:**  
   Ao enviar o formulário, verifique se a soma dos dois números é igual à resposta do usuário. Se estiver correta, atualize um estado (por exemplo, `isCorrect`) para indicar que o usuário acertou.

4. **Exibir Gif de Parabéns:**  
   Se a resposta estiver correta, utilize outro estado (por exemplo, `showGif`) para exibir uma imagem gif parabenizando o usuário. Você pode usar um gif disponível online (por exemplo, um gif do Giphy).

5. **Utilizando useEffect:**  
   - Use um useEffect para gerar os números aleatórios quando o componente for montado.
   - Utilize outro useEffect para, após uma resposta correta, aguardar alguns segundos (por exemplo, 5 segundos) e, em seguida, reiniciar o jogo.

---

### Exemplo de Código

```jsx
import React, { useState, useEffect } from 'react';

const MathGame = () => {
  // Estados para os números, resposta do usuário e controle do jogo
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showGif, setShowGif] = useState(false);

  // Função para gerar novos números aleatórios e resetar os estados
  const generateNumbers = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setIsCorrect(false);
    setShowGif(false);
  };

  // useEffect para gerar os números ao montar o componente
  useEffect(() => {
    generateNumbers();
  }, []);

  // Função para validar a resposta do usuário
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setIsCorrect(true);
      setShowGif(true);
    } else {
      setIsCorrect(false);
      alert('Resposta incorreta. Tente novamente!');
    }
  };

  // useEffect para reiniciar o jogo 5 segundos após a resposta correta
  useEffect(() => {
    if (isCorrect) {
      const timer = setTimeout(() => {
        generateNumbers();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isCorrect]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo de Matemática</h1>
      <p>Quanto é {num1} + {num2}?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {showGif && (
        <div style={{ marginTop: '20px' }}>
          <img
            src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
            alt="Parabéns!"
            style={{ width: '300px' }}
          />
          <p>Parabéns, você acertou!</p>
        </div>
      )}
    </div>
  );
};

export default MathGame;
```

---

### Explicação

- **Estados com useState:**  
  Os estados `num1` e `num2` armazenam os números aleatórios, `userAnswer` guarda a resposta digitada, `isCorrect` controla se a resposta está correta e `showGif` determina se o gif deve ser exibido.

- **useEffect para Inicialização:**  
  No primeiro useEffect (com array de dependências vazio), a função `generateNumbers` é chamada quando o componente é montado, gerando os números aleatórios.

- **Validação da Resposta:**  
  A função `handleSubmit` impede o comportamento padrão do formulário, calcula a resposta correta e compara com o valor digitado pelo usuário. Se a resposta estiver correta, os estados são atualizados para mostrar o gif; caso contrário, exibe um alerta.

- **Reiniciando o Jogo:**  
  Um segundo useEffect observa o estado `isCorrect` e, quando verdadeiro, inicia um timer de 5 segundos para reiniciar o jogo, gerando novos números.
