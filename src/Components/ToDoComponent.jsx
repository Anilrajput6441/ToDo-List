import React, { useEffect, useState } from 'react'
import Addtask from '../utils/AddTask.js';
import Resetlist from '../utils/Resetlist.js';
import TaskCard from './TaskCard.jsx';
import { useContext } from 'react';
import UserContext from '../utils/UserContext.js';

const ToDoComponent = () => {
   const [tigger,setTigger]=useState(0);
   const [data,setData] = useState([]);
   const {globalTigger,setglobalTigger} = useContext(UserContext);
   const {globalTiggerCompleted,setglobalTiggerCompleted} = useContext(UserContext);
   console.log("global tigger is : " , globalTigger)
    const addData=()=>{
      const task=document.getElementById("task").value;
      const Priority=document.getElementById("Priority").value;
    //   alert(task+" "+Priority)
      const data={
        task,Priority
      }
      const n = Addtask(data);
      if (n) {
        // if (tigger != 1) {
        //     setTigger(1);
        // }
        // else{
        //     setTigger(0);
        // }
        setTigger(!tigger);
        setglobalTigger(!globalTigger);
        
      }


    }
    const fetchData = () => {
        console.log("fetch data called");
    
        // Check if 'task' data is available in localStorage
        if (localStorage.getItem("task")) {
            const taskArray = JSON.parse(localStorage.getItem("task"));
    
            // Check if taskArray is a valid array
            // if (Array.isArray(taskArray)) {
            //     // Log fetched data
            //     console.log("Fetched tasks:", taskArray);
    
            //       // Sort the tasks by priority (convert priority to number for correct sorting)
            //     const sortedTasks = taskArray.sort((a, b) => {
            //         const priorityA = parseInt(a[1], 10);  // Convert priority to number
            //         const priorityB = parseInt(b[1], 10);  // Convert priority to number
            //         return priorityA - priorityB;  // Sort by priority
                    
            // });
            //     setData(sortedTasks);
    
            //     // Log the sorted tasks to verify
            //     console.log("Sorted tasks by priority:", sortedTasks);
    
            //     // Set the sorted tasks to state
                
            // } else {
            //     console.log("Invalid data format in localStorage.");
            // }
            setData(taskArray)
        } else {
            setData([]);
        }
    };
    
    
    useEffect(()=>{
        fetchData();

    },[tigger,globalTigger])
  return (
    <>
    {console.log(data)}
    <div>
    <p className='mt-4 ml-3 font-bold text-[6vmin]'>Add Task</p>
    <div className='w-[100vw] md:w-[50vw] text-[#000000] flex mt-10 ml-3'>
          <input type="text" placeholder='Add Task...' className='p-2 h-[7vmin] w-[60%]' id="task"/>
          <select name="Priority" id="Priority" className='h-[7vmin] bg-[#C0C0C0] w-[15%] md:w-[10%] pl-1'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <div className="additionholder  bg-[#3d18c0] h-[7.2vmin] w-[22%] md:w-[20%]  text-white   " onClick={()=>
                {
                    addData()
                    document.getElementById("task").value="";
                }}>
            <p className='text-center  mt-1 '>
            Add</p>
              
          </div>
      </div>
      <div className="Taskcardholder flex flex-col gap-y-3 mt-3 ml-3">
      {data.length>0?data.sort((a,b)=>a[1]-b[1]).map((val,ind)=>( <TaskCard  task={val[0]} priority={val[1]}/> ) ):<div></div>}
      </div>
      <div className="Buttonholder">
          
        <button className='bg-[#fa5339] p-2 mt-3 ml-3 ' onClick={()=>{  Resetlist(); setTigger(!tigger); document.getElementById("task").value=""; setglobalTiggerCompleted(!globalTiggerCompleted);}}>Clear All</button>
        
      </div>
      </div>
      </>
  )
}

export default ToDoComponent

