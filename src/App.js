import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import ButtonX from './components/button';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <p>test</p>
      <Card/>
      <Card/> 
      {/* <ButtonX/> */}
      </div>
      </>
  );
}

export default App;
