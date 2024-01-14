import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import Aboutme from './Components/Aboutme';
import Experience from './Components/Experience';
import Topnav from './Components/Topnav';
import Myskills from './Components/Myskills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Socialmedia from './Components/Socialmedia';

function App() {
  return (
    <div className="App">
     <Topnav/>
     <Homepage para="Hello I'm" name="Santhameena Ponnazhagan" title="Frontend Developer"/>
     <Aboutme/>
     <Experience/>
     <Myskills/>
     <Projects/>
     <Contact/>
     <Socialmedia/>
    </div>
  );
}

export default App;
