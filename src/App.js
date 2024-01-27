import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/functionalComp/NavBar';
import About from './components/functionalComp/About';
import Home from './components/functionalComp/Home';
import Contact from './components/functionalComp/Contact';
import Staff from './components/functionalComp/Staff';
import Footer from './components/functionalComp/Footer';
import Landing from './components/functionalComp/Landing';
import Login1 from './components/functionalComp/Login1';
import { useEffect } from 'react';
import Dummylogin from './components/functionalComp/Dummylogin';
import Signup from './components/functionalComp/Signup';



// import Login from './components/classComp/Login';
// import Props from './components/functionalComp/Props';
// import PropsDestr from './components/functionalComp/PropsDestr';
//import State from './components/classComp/State';

function App() {
  useEffect( () => {
    console.log("Side effects are sleepy and drowziness")
})

  return (
    <div>
       
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path="/hom" element={<Home/>}></Route>
        <Route path="/abt" element={<About/>}></Route>
        <Route path="/stf" element={<Staff/>}></Route>
        <Route path="/cont" element={<Contact/>}></Route>
        <Route path="/sign" element={<Signup/>}></Route>
        <Route path='/log' element={<Login1/>}></Route>
        <Route path="/dlog" element={<Dummylogin/>}></Route>

      </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>



// <div>
//   {/* <Login />
//   <Props name="Anu" course="MERN" /> */}
//   {/* <PropsDestr dpt="ece" sem="6"/> */}
//   {/* <PropsDestr eg={dpt:"ece",sem:"6"} / */}
//   {/* <State /> */}
// </div>
      
  );
}

export default App;
