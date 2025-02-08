import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContatoPage from './pages/ContatoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contato' element={<ContatoPage />} />

          <Route path='*' element={<h1>404 - Não encontrada!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
