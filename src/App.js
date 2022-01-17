import React,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Complete from './components/Complete';
import { Header } from './components/Header';
import Todo from './components/Todo';
export const listcontext = React.createContext('');


function App() {
  const [complete,setComplete]=useState([])
  return (
    <div className='.container-fluid'>
      <Router>
        <listcontext.Provider value={{complete,setComplete}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Todo/>} />
          <Route path='/Complete' element={<Complete/>} />
        </Routes>
        </listcontext.Provider>
      </Router>
    </div>
  )
}

export default App;