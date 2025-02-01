import Produto from './components/Produto'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'

function App() {
  return (
    <>
      <Header />
      <img src="url" alt="" />
    
      <div className="p-4 d-flex gap-4">
        <Produto 
          nome="MOuse USB" 
          url="https://m.media-amazon.com/images/I/51O4iw8SuCL.jpg" 
          preco="15,99" 
        >
          <strong>Descrição</strong>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, minus velit similique dolorem quis recusandae corporis deleniti voluptate et facere atque temporibus voluptates reiciendis quae architecto harum delectus alias?
          <div className="alert alert-success">Promoção</div>
          <div>
            <button>Aproveite!</button>
          </div>
          <Produto nome="Monitor" />
        </Produto>

        <Produto 
          nome="Teclado USB" 
          url="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQjy7smW3v1z70mK0x-p9i6s_Aui7wc-7y-7t44-YK8Fi1lR0YJvpRgH_YUzSZBBa_Mqc_uUhXNidIHiCu0l2SwQrwZ8HoH_k5GTDt8CQqDYJBKo7AmhLjWz5uu20z7CBYE4xclLl61PSE&usqp=CAc" 
          preco="35,99" 
        />
      </div>
     
      
      
      <Footer />
    </>
  )
}

export default App
