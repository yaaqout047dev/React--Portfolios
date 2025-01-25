
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/home/Home';
import About from './containers/about/About';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';
import Portfolio from './containers/portfolio/Portfolio';
import Contact from './containers/contact/Contact';
import Navbar from './components/navBar/Navbar';
function App() {

  return (

<div className='App'>

{/* ========== #Navbar . =========  */}
<Navbar/>

<div className="App__main-page-content">
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/resume" element={<Resume/>} />
  <Route path="/skills" element={<Skills/>} />
  <Route path="/portfolio" element={<Portfolio/>} />
  <Route path="/contact" element={<Contact/>} />
  </Routes>
</div>
</div>
  );
}

export default App;
