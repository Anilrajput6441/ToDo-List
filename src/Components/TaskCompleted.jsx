import React, { useState,useEffect } from 'react'
import UserContext from '../utils/UserContext';
import { useContext } from 'react';
import TaskCard from './TaskCard';


const TaskCompleted = () => {
    // global state variable
    const {globalTiggerCompleted,setglobalTiggerCompleted} = useContext(UserContext);
    const [data,setData] = useState([]);
    const fetchData = () => {
        console.log("fetch data called");
    
        // Check if 'task' data is available in localStorage
        if (localStorage.getItem("taskCompleted")) {
            const taskArray = JSON.parse(localStorage.getItem("taskCompleted"));
    
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

    },[globalTiggerCompleted])
  return (
    <div>

      <h1 className='mt-6 ml-4 text-[4.5vmin] font-bold'>Completed Tasks</h1>
      <div className='taskholder mt-4 flex flex-col ml-5 gap-y-3'>
      {data.length>0?data.sort((a,b)=>a[1]-b[1]).map((val,ind)=>( <TaskCard  task={val[0]} priority={val[1]} type="completed"/>) ):<div></div>}
      </div>
    </div>
  )
}

export default TaskCompleted
