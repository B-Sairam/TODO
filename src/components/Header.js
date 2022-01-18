import React,{useContext} from "react";
import { listcontext } from "../App";
import { Link } from "react-router-dom";


export function Header(){
    let context = useContext(listcontext)
    
    return(
        <div className="head">
            <h2>TODO</h2>
          <Link to="/login">
          <div className="user">
           {
              context.user? <img src="https://img.icons8.com/bubbles/50/000000/user.png" alt="user"/>:
              <button className="btn btn-warning btn-sm">Login?</button>  
            }
           </div>
          </Link>
        </div>
    )
}