import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg:message, 
      type:type,
    })
    setTimeout(()=>{
      setAlert(null)},1000)
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert('Dark Mode has been enabled',"success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('Light Mode has been enabled',"success");

    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3"> {/* bootstrap container class*/}
      <Switch>
          <Route exact path="/about">
              <About/>
          </Route>
          <Route exact path="/">
            <Textform heading="Enter the text to modify" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}
export default App;
 