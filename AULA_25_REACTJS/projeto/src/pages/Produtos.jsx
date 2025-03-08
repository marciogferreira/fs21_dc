import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import { Table } from 'react-bootstrap'
const Produtos = () => {
    const [lista, setLista] = useState([
        // {
        //     id: 1,
        //     title: 'Bolsa',
        //     price: 109.54,
        //     description: 'bolsa',
        //     category: 'men´s clothing'
        // },
        // {
        //     id: 2,
        //     title: 'Calça',
        //     price: 54.54,
        //     description: 'calça',
        //     category: 'men´s clothing'
        // },
        // {
        //     id: 3,
        //     title: 'Blusa',
        //     price: 94.54,
        //     description: 'Blusa',
        //     category: 'men´s clothing'
        // }
    ]);

    async function listarProdutos() {
        const response = await fetch('https://fakestoreapi.com/products')
        const dados = await response.json()
        setLista(dados)
    }

    useEffect(() => {
        listarProdutos()
    }, []);
    console.log(lista)
    // https://dontpad.com/fs21
    return (
        <LayoutDefault>
            <h4>Produtos</h4>
            <hr />
            <input type="text" className="form-control" placeholder="Pesquisar" />
            {lista.length === 0 && 'Não há produtos.'}
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMG</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.image} alt={item.title} width="50" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </LayoutDefault>
    )
}

export default Produtos