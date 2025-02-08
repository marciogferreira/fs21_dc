
### 📝 **Objetivo do Exercício**
Criar um site React com pelo menos **três páginas** (Home, Sobre e Contato) utilizando `react-router-dom` para navegação e componentes reutilizáveis.

---

### 🚀 **Passo a passo**
1. **Criar o projeto com Vite**:
   ```sh
   npm create vite@latest my-react-site --template react
   cd my-react-site
   npm install
   ```
2. **Instalar React Router DOM**:
   ```sh
   npm install react-router-dom
   ```
3. **Criar os componentes e configurar o roteamento**.

---

Aqui está a implementação completa do projeto: 👇

```tsx
// Criando o arquivo principal do projeto com roteamento e componentes

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importação de páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Componente Navbar
function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-lg font-bold">Meu Site</h1>
      <div>
        <Link className="px-4" to="/">Home</Link>
        <Link className="px-4" to="/about">Sobre</Link>
        <Link className="px-4" to="/contact">Contato</Link>
      </div>
    </nav>
  );
}

// Componente principal App
export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
```

---

### 📄 **Criando as páginas**
Agora, crie uma pasta chamada `pages` dentro de `src/` e adicione os seguintes arquivos:

#### 📌 **1. Home.tsx**
```tsx
export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Página Inicial</h2>
      <p>Bem-vindo ao site feito com React Router!</p>
    </div>
  );
}
```

#### 📌 **2. About.tsx**
```tsx
export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Sobre</h2>
      <p>Este site foi criado como um exercício para aprender React Router.</p>
    </div>
  );
}
```

#### 📌 **3. Contact.tsx**
```tsx
export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Contato</h2>
      <p>Envie um e-mail para contato@meusite.com</p>
    </div>
  );
}
```

---

### 🏁 **Executando o projeto**
Após criar os arquivos, inicie o projeto com:
```sh
npm run dev
```

Agora, seu site em React está rodando com múltiplas páginas! 🚀

Esse exercício ensina:
✅ Criar um projeto com **Vite**  
✅ Utilizar **React Router DOM**  
✅ Criar e estruturar **componentes reutilizáveis**  
✅ Organizar um projeto com múltiplas páginas  

Me avise se precisar de mais alguma coisa! 😊