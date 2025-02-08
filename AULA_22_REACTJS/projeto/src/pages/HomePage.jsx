import Header from '../layouts/Header'
import Body from '../layouts/Body'
import Footer from '../layouts/Footer'
import LayoutDefault from '../layouts/LayoutDefault';

function HomePage() {
    return (
        <>
            <LayoutDefault>
                <h1>Página Inicial</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum necessitatibus modi nulla dolores eaque minus? Eos, architecto minus autem provident ad inventore placeat voluptate earum cumque recusandae ipsa optio!
                </p>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem quaerat iure numquam temporibus molestiae distinctio ea ullam voluptas ex nulla ab, consequatur at eum ipsum dolores dicta a nisi.
                </p>
            </LayoutDefault>
        </>
    )
}

export default HomePage;