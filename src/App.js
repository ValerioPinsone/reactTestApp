import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Card/>
      <Card/> 
      </div>
      </>
  );
}

export default App;
