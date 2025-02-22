import { useState } from "react"
import feliz from './assets/feliz.gif'
import serio from './assets/serio.gif'
function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0)
  
  function mudarCampo(evento) {
    const { name, value } = evento.target;
    if(name === 'valor1') {
      setValor1(Number(value));
    } else {
      setValor2(Number(value));
    }
  }
  
  function somar() {
    const res = valor1 + valor2;
    setResultado(res);
  }

  // SE O RESULTADO DA SOMA FOR MAIOR DO QUE 100, ENTAO EXIBA UM GIF FELIZ.
  // SE NÃO, EXIBA UM GIF SERIO.


  return (
    <>
     <h1>Calculadora</h1>
      {valor1}
      <input type="text" id="valor1" name="valor1" onChange={mudarCampo} />
      <br />
      {valor2}
      <input type="text" id="valor2" name="valor2" onChange={mudarCampo}  />
      <button onClick={somar}>Somar</button>
      <h1>Resultado: {resultado}  </h1>
      {
        resultado >= 100 
        ? 
        <img src={feliz} height={100} alt="" /> 
        : 
        <img src={serio} height={100} alt="" />
      }
     
    </>
  )
}

export default App
