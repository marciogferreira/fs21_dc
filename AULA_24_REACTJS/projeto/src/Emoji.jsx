import { useState, useEffect } from "react";

function Emoji() {
  const [contador, setContador] = useState(0);
  const [smile, setSmile] = useState(<span>&#128526;</span>);

  useEffect(() => {
    document.querySelector('body').style.background = '#CCC'
  }, []);

  useEffect(() => {
    if(contador < 0 && contador >= -5) {
      setSmile(<span>&#128528;</span>)
    }else if(contador < -5) {
      setSmile(<span>&#128546;</span>)
    }else if(contador >= 5 && contador < 10) {
      setSmile(<span>&#128521;</span>)
    } else if(contador >= 10) {
      setSmile(<span>&#128525;</span>)
    } else {
      setSmile(<span>&#128526;</span>)
    }
  }, [contador]);

  return (
    <>
      <h1>useState e useEffect</h1>
      <h2>Contador: {contador}</h2>
      <div style={{ fontSize: '5em' }}>
        {smile}
      </div>
      <button onClick={() => {setContador(contador - 1)}}>Diminuir</button>
      <button onClick={() => {setContador(contador + 1)}}>Aumentar</button>
    </>
  )
}

export default Emoji
