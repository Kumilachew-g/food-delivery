import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
