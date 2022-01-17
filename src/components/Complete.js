import React,{useContext} from 'react';
import { listcontext } from '../App';
import {MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Complete() {

    let context = useContext(listcontext);

    function deletItem(item){
        context.complete.splice(context.complete.indexOf(item),1)
        context.setComplete([...context.complete])
      
    }
    return (
        <div>
            {
                context.complete.length?<div className='todo-container container'>
                      <div className="com-img">
                <img src="https://t4.ftcdn.net/jpg/03/66/61/05/360_F_366610508_aub4nSf9pqtxZjzAWtj6ezMzpMp4nmvE.jpg" alt="img"/>
              </div>
                <h1 className='text-center pb-3'>Task Completed</h1>
                
                    { 
                        context.complete.map((item,id)=>{
                          
                            if(item.length!==0){
                            return  <li key={id} className='list-group-item item '>{item}
                            <div>
                            
                            <span onClick={()=>deletItem(item)}><MdDelete/></span>
                            </div>
                            </li>
                            }else{
                                return  <li key={id} className='list-group-item item '>no item
                            <div>
                            
                            <span><MdDelete/></span>
                         
                            
                            </div>
                            </li>
                            }                             
                            
                        })
                        
                    }
                    <div className="back"> <Link to="/"><button className="btn btn-primary mt-3 mb-2">Back</button></Link></div>              
            </div>: <div className="back">
                <h1>No data found</h1>
                <img className="noData" src="https://media.istockphoto.com/vectors/no-data-illustration-vector-concept-vector-id1300261821?k=20&m=1300261821&s=612x612&w=0&h=yQZGdLw_ndlXcpNnOlnNcne86JwmsLifMM1DWdKar7Q=" alt="img"></img>
           <Link to="/"><button className="btn btn-primary  ">Back</button></Link>
    </div>
            }
        </div>
    )
}

export default Complete