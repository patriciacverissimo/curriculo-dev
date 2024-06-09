function ExibeTextoPersonalizado (props) {
    return <h1>Olá, {props.children}</h1>
}

const Home = () => <ExibeTextoPersonalizado> Patrícia Veríssimo </ExibeTextoPersonalizado>;


export default Home;