import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';

function App() {
return(
  <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/nosotros' element={ <Nosotros /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;