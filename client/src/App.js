import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
