function ExibeTextoPersonalizado (props) {
    return <h1>Olá, {props.name} | Idade: {props.idade} </h1>
}

const Home = () => <ExibeTextoPersonalizado name="Patrícia" idade="32"/>


export default Home;