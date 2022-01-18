import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Complete from './components/Complete';
import Details from './components/Details';
import { Header } from './components/Header';
import Todo from './components/Todo';
export const listcontext = React.createContext('');


function App() {
  const [user,setUser]=useState('')
  const [complete,setComplete]=useState([])
  useEffect(()=>{
   if(JSON.parse(localStorage.getItem('com')) != null){
    let comData = JSON.parse(localStorage.getItem('com'));
    setComplete(comData)
   }
},[])
useEffect(()=>{
  if(JSON.parse(localStorage.getItem('user')) != null){
   let userData = JSON.parse(localStorage.getItem('user'));
   setUser(userData)
  }
},[])
  

  return (
    <div className='.container-fluid'>
      <Router>
        <listcontext.Provider value={{complete,setComplete,user,setUser}}>
        <Header/>
        <Routes>
        <Route path='/login' element={<Details/>} />
          <Route path='/' element={<Todo/>} />
          <Route path='/Complete' element={<Complete/>} />
        </Routes>
        </listcontext.Provider>
      </Router>
    </div>
  )
}

export default App;