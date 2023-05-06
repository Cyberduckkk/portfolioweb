import './App.css';
import About from './Components/About/About';
import Header from './Components/Banner/Header';
import Navbar from './Components/Header/Navbar';
import "animate.css/animate.min.css";
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import ScrollTop from './Components/ScrollTop/ScrollTop';
function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
    <Navbar/>
    <main>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
    </main>
    <Contact/>
    <ScrollTop/>
    </>
  );
}

export default App;
