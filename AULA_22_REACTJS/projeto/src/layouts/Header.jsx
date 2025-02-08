function Header(props) {
    return (
        <header>
            {props.nome} - {props.mensagem}
            <h2>Header</h2>
            {props.children}
        </header>
    )
}

export default Header;