import Menu from "./Menu"

const LayoutDefault = ({ children }) => {
    return (
        <>
            <Menu />
            <div className="container mt-3">
                {children}
            </div>
        </>
    )
}

export default LayoutDefault