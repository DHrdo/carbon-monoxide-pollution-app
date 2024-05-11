import './App.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Results } from './components/Results/Results';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();


  return (
    <div className="App">
      <Header />

      <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/results' element={<Results />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
