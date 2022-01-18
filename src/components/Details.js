import React,{useContext} from 'react'
import { listcontext } from '../App';
import { Link } from 'react-router-dom';



function Details() {
    let context = useContext(listcontext)

    function login(newUser){
        localStorage.setItem('user',JSON.stringify(newUser))
    }
    return (
        <div className="container login " >
            <img  src='https://unicusacademy.com/wp-content/themes/unicusacademy/img/log.png' alt='logoin'></img>
           <div className="col-10 mb-3 login-detail ">
  <label for="exampleFormControlInput1" className="form-label">Your Nick Name 	&#128512;</label>
  <input type="text" onChange={(e)=>context.setUser(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Here.."/>
  </div>
  <Link to='/'> <button className='btn btn-primary' onClick={()=>login(context.user)}>Login</button></Link> 
        </div>
    )
}

export default Details
