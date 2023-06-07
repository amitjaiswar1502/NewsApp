import './App.css';
import NavBar from './components/NavBar';
import React, { useState } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';

//NOTE :  this app runs only on local system as API is restricted to hosting


const App = () => {
  //on initial load
  const onInit = ('load', function () {
    document.body.style.backgroundColor = '#FEFAE0';

  })

  window.addEventListener('load', function () {
    onInit();
  })



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  //setting mode
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0);

  const pageSize = 12; //setting up page size
  const apiKey = process.env.REACT_APP_NEWS_API; //storing api in environmental variable


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#242648';
      showAlert("Dark mode has been enabled", "success");


    } else {
      setMode('light');
      document.body.style.backgroundColor = '#FEFAE0';
      showAlert("Light mode has been enabled", "success");


    }
  }


  return (
    <>
      <div>
        <Router>
          <NavBar mode={mode} toggleMode={toggleMode} />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress} />

          <Alert alert={alert} />

          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' showAlert={showAlert} mode={mode} />}></Route>

          </Routes>
        </Router>

      </div>
    </>
  )

}
export default App;
