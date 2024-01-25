import './App.css';
import Login from './components/classComp/Login';
import Props from './components/functionalComp/Props';

function App() {
  return (
    <div>
      <Login />
      <Props name="Anu" course="MERN" />
    </div>
      
  );
}

export default App;
