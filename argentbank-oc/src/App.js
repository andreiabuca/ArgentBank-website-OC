import React from 'react';
import './assets/css/main.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
