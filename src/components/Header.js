import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { listcontext } from "../App";


export function Header(){

    let context = useContext(listcontext);
    
    return(
        <div className="head">
            <h2>TO-DO</h2>
        </div>
    )
}