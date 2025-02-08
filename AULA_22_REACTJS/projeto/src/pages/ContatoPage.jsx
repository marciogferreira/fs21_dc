import Header from '../layouts/Header'
import Body from '../layouts/Body'
import Footer from '../layouts/Footer'
import LayoutDefault from '../layouts/LayoutDefault';

function ContatoPage() {
    return (
        <>
           <LayoutDefault>
                <h1>Página de Contato</h1>
                <form action="">
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" className='form-control' />
                    </div>
                </form>
           </LayoutDefault>
        </>
    )
}

export default ContatoPage;