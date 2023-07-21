import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState ("light")
  const [alert, setAlert] = useState (null)

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })

    setTimeout (() => {
      setAlert (null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light")
    {
      setMode ("dark")
      console.log("Dark Mode on")
      document.body.style.backgroundColor = "#669999";
      showAlert ("Dark Mode has been enabled", "success");
    }
    else
    {
      setMode ("light")
      console.log("Dark Mode off")
      document.body.style.backgroundColor = "white"
      showAlert ("Dark Mode has been disabled", "success")
    }
  };
  return (
    <Router>
      <>
        <Navbar title = "Text Utilities" mode = {mode} toggleMode = {toggleMode} alert = {alert}/>  
        <Alert alert = {alert} mode = {mode}/>
          <Routes>
            <Route exact path="/" element={<><TextForm heading = "Enter the text you want to analyze" mode = {mode} alert = {alert} showAlert = {showAlert}/></>}/>
            <Route path="/about" element={<><About/></>} />
          </Routes>
      </>
    </Router>
  );
}

export default App;
