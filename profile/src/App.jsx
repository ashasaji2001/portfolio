import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Skills/>
     <br />
     <br />
     <Projects/>
     <br />
     <Footer/>
    </div>
    
  );
}

export default App;
