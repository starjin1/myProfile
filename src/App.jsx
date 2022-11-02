
import './App.css';
import Header from './component/header/Header';
import About from './component/about/About';
import Nav from './component/nav/Nav';
import Contact from './component/contact/Contact';
import Skills from './component/skills/Skills'
import Project from './component/project/Project';

function App() {
  return (
    <>
    <Header/>
    {/* <Nav /> */}
    <About />
    <Skills />
    <Project />
    <Contact />
    </>

  );
}

export default App;
