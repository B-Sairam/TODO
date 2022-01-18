import React,{useState,useContext,useEffect} from 'react'
import {TiTick} from 'react-icons/ti';
import {MdDelete} from 'react-icons/md';
import {VscAdd} from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { listcontext } from '../App'


function Todo() {
    const [todo,setTodo]=useState([]); 
    const [input,setInput]=useState('');
    let context = useContext(listcontext)

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('todo'))!=null){
          let store = JSON.parse(localStorage.getItem('todo'));
        setTodo(store)
        }
        
    },[])
   
  function addTask(newTodo){
        if(newTodo){
        todo.push(newTodo)
        setTodo([...todo])
        localStorage.setItem('todo',JSON.stringify([...todo]));
        setInput('')
        document.querySelector('.clear').value='';
          
        // message
          function showNotification(){
            const notification = new Notification('You have added the task!', {
              body:newTodo,
              icon:"https://img.icons8.com/fluency/48/000000/microsoft-todo-2019.png"
            });
          }

        console.log(notification);

        if(Notification.permission==="granted"){
          showNotification();
        }else if(Notification.permission !=="denied"){
          Notification.requestPermission().then(permission =>{
            
            if(permission==='granted'){
              showNotification();
            }
          })
        }
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
            <span className="badge text-light pending">pending &nbsp; {todo.length}</span>
              <div className="todo-img">
                <img src="https://cdn-icons-png.flaticon.com/512/2422/2422612.png" alt="img"/>
              </div>
            <div className="input-group mb-3">
                    <input type="text"  className="form-control p-1 clear" onChange={(e)=>setInput(e.target.value)} placeholder="Add your Task" aria-label="Recipient's username"  aria-describedby="button-addon2"/>
                    <button className="btn btn-primary t-bold" onClick={(e)=>addTask(input,e)}  type="button" id="button-addon2"><VscAdd/></button>
            </div>
        {
            todo.length? <div className='todo-container'>
                <h2 className='text-center'>Hey, {context.user}! Your Task <span>&#128578;</span></h2>
                
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

                
            </div>:<div  className='no-task'><h1>Add Task</h1><h1>{context.user}!! &#128578;</h1> </div>
        }
                <Link to='/Complete'><button className='btn-complete btn'>Completed <span className='badge rounded-pill bg-dark'>{context.complete.length}</span></button></Link>
        </div>
    )
}

export default Todo
