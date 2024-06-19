import './botao.css'

const Botao = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Botao

// {props.children} receeb tudo que vem entre a tag <Botao> dentro do 'index.js' do 'Formulario'