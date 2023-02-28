import './App.css';
import Carrusel from './components/Carrusel';
import Deslizador from './components/Deslizador';
import Footer from './components/Footer';
import Middle1 from './components/Middle1';
import Middle2 from './components/Middle2';
import NuevaNav  from './components/NuevaNav';

function App() {
  return (
    <div className="App">
      <NuevaNav />
      <Carrusel />
      <Middle1 />
      <Middle2 />
      <Deslizador />
      <Footer />
    </div>
  );
}

export default App;
