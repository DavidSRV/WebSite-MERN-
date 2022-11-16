import './_App.scss';
import NavBar from './components/NavBar';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Services/>
    </>
  );
}

export default App;
