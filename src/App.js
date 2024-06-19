import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/screens/home'
import Login from '../src/screens/login'
import DigiteSeuEmail from './screens/digiteseuemail'
import DigiteCodigo from './screens/digitecodigo'
import Esqueciasenha from './screens/esqueciasenha'
// Ajustado para não repetir o nome do componente duplicado: Dentro da pasta de cada componente cada js é chamado de index.

// Pode-se passar por parâmetro pois im cpmponente no fundo é uma função, que a função anonima recebera (label)
function App() {
 
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<h1>404. Página não encontrada</h1>} />
          <Route path='/digite-o-email' element={<DigiteSeuEmail/>}/>
          <Route path='/esqueci-a-senha' element={<Esqueciasenha/>}/>
          <Route path='/digite-o-codigo' element={<DigiteCodigo/>}/>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
