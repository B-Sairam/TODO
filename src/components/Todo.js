import React,{useState,useContext} from 'react'
import {TiTick} from 'react-icons/ti';
import {MdDelete} from 'react-icons/md';
import {VscAdd} from 'react-icons/vsc';
import {BsHandThumbsUpFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { listcontext } from '../App'


function Todo() {
    const [todo,setTodo]=useState([]); 
    const [input,setInput]=useState('');
    let context = useContext(listcontext)

    // useEffect(()=>{
    //     let store = JSON.parse(localStorage.getItem('todo'));
    //     setTodo(store)
        
    // },[])
   
  function addTask(newTodo){
        if(newTodo){
        todo.push(newTodo)
        setTodo([...todo])
        localStorage.setItem('todo',JSON.stringify([...todo]));
        setInput('')
        document.querySelector('.clear').value='';
        }
    
    
    
  }

  function deletItem(item){
      todo.splice(todo.indexOf(item),1)
      setTodo([...todo])
      localStorage.setItem('todo',JSON.stringify([...todo]));
  }
  function taskComplete(item){
    context.complete.push(item);
    context.setComplete([...context.complete]);
    localStorage.setItem('com',JSON.stringify([...context.complete]));
    todo.splice(todo.indexOf(item),1)
      setTodo([...todo])   
    localStorage.setItem('todo',JSON.stringify([...todo]))
  }
  
    
    return (
        <div className='container main'>
            <span className="badge bg-danger text-light pending">pending &nbsp; {todo.length}</span>
              <div className="todo-img">
                <img src="https://cdn-icons-png.flaticon.com/512/2422/2422612.png" alt="img"/>
              </div>
            <div className="input-group mb-3">
                    <input type="text"  className="form-control p-1 clear" onChange={(e)=>setInput(e.target.value)} placeholder="Add your Task" aria-label="Recipient's username"  aria-describedby="button-addon2"/>
                    <button className="btn btn-primary t-bold" onClick={(e)=>addTask(input,e)}  type="button" id="button-addon2"><VscAdd/></button>
            </div>
        {
            todo.length? <div className='todo-container'>
                <h1 className='text-center'>Your Task <span><BsHandThumbsUpFill/></span></h1>
                
                    { 
                        todo.map((item,id)=>{
                          
                            if(item.length!==0){
                            return  <li key={id} className='list-group-item item '>{item} <br></br>
                            <div>
                            
                            <span onClick={()=>deletItem(item)}><MdDelete/></span>
                            <span onClick={()=>taskComplete(item)}><TiTick/></span>
                            </div>
                            </li>
                            }else{
                                return  <li key={id} className='list-group-item item '>no item
                            <div>
                            
                            <span><MdDelete/></span>
                            <span><TiTick/></span>
                            
                            </div>
                            </li>
                            }

                              
                               
                            
                                
                            
                              
                                    
                            
                        })
                    }

                
            </div>:<h1 className='text-center'>Add Task</h1>
        }
                <Link to='/Complete'><button className='btn-complete btn'>Completed <span className='badge rounded-pill bg-dark'>{context.complete.length}</span></button></Link>
        </div>
    )
}

export default Todo