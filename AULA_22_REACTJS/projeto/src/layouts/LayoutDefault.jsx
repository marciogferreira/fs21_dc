import Footer from "./Footer";
import Header from "./Header";

function LayoutDefault(props) {
    return (
        <div className="container" style={{ backgroundColor: '#CCC' }}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default LayoutDefault;