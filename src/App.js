import './App.css';
import 'antd/dist/reset.css';
import Header from './components/NavBar';
import './assets/img/aceite-esencial.png';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
          <Route path='/' element={
              <ItemListContainer />
            } />
            <Route path='/:categoryName' element={
              <ItemListContainer />
            } />
            <Route path='/detail/:id' element={
              <ItemDetailContainer />
            } />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
