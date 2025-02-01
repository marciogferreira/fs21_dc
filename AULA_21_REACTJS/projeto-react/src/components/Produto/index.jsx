function Produto(props) {
    
    console.log(props)

    return (
        <>
           <div className="card" style={{ width: '18rem' }}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.children}</p>
                    <p className="card-text">{props.preco}</p>
                    <a href="#" className="btn btn-warning">Adicionar no Carrinho</a>
                </div>
            </div>
        </>
    )
}

export default Produto