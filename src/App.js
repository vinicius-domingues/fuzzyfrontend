import Banner from './components/banner';
import CampoTexto from './components/campotexto';
import Formulario from './components/formulario';
// Ajustado para não repetir o nome do componente duplicado: Dentro da pasta de cada componente cada js é chamado de index.

/// Pode-se passar por parâmetro pois im cpmponente no fundo é uma função, que a função anonima recebera (label)
function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
