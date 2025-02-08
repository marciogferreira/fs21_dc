import Menu from './Menu'
function Header(props) {
    return (
        <header className="bg-dark text-white vh-50 p-4">
            {props.nome} - {props.mensagem}
            <Menu />
            {props.children}
        </header>
    )
}

export default Header;