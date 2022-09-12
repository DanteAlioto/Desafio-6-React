import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {

  return (
    <div className='container'>
      <div className='row'>
        <Navbar/>
        <ItemListContainer greeting= "Hola"/>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
