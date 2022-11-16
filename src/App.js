import './_App.scss';
import NavBar from './components/NavBar';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Contact from './page/Contact';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Services/>
    <Contact />
    </>
  );
}

export default App;
