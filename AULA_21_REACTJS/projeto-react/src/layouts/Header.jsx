function Header() {
    return (
        <header id="topo" className="vh-10 text-white">
            <div className="d-flex justify-content-between p-3">
                <div>
                    Logo
                </div>
                <div style={styles.menu}>   
                    Menu
                </div>
            </div>
        </header>
    )
}

const styles = {
    menu: {
        background: 'red'
    }
}

export default Header;