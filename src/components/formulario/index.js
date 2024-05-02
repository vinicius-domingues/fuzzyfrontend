import CampoSenha from '../camposenha'
import CampoTexto from '../campotexto'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import './formulario.css'

const Formulario = () => {
    return(
        <section className='formulario'>
            <form>
                <CampoTexto label="E-mail" placeholder="Digite seu e-mail aqui"/>
                <CampoSenha label="Senha" placeholder="Digite sua senha aqui"/>

                <div className='entrar-esqueci'>
                    <Typography variant="body2" style={{fontSize: '16px', textTransform: 'none', textDecoration: 'underline', padding: '0px'}}>Esqueci minha senha</Typography>
                    <Button variant="contained" style={{letterSpacing: '.2rem', fontWeight: 'bold', fontSize: '16px', backgroundColor: '#7A00E6', width: '10rem', height:'47px'}}>ENTRAR</Button>
                </div>
            </form>

        </section>
    )
};

export default Formulario