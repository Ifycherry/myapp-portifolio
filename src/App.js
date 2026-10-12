// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service'
import Projects from './component/Projects';
import Contact from './component/Contact';
import './index.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './component/Footer';


function App() {
  return (
    <>
    
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/about' element={<About />} />
    <Route path='/service' element={<Service />} /> 
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/footer' element={<Footer />} />
    </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
