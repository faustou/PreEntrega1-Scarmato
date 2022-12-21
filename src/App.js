import './App.css';
import 'antd/dist/reset.css';
import './App.css';
import Header from './components/NavBar';
import './assets/img/aceite-esencial.png';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer />
    </div>
  );
}

export default App;
