import React from 'react'
import removeTask from '../utils/RemoveTask'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'
import comletedTask from '../utils/CompletedTask'
import Addtask from '../utils/AddTask'
import removeTaskCompleted from '../utils/RemoveTaskCompleted'

const TaskCard = (props) => {
    const {globalTigger,setglobalTigger} = useContext(UserContext);
    const {globalTiggerCompleted,setglobalTiggerCompleted} = useContext(UserContext);
    console.log("from task card gt: ",globalTigger);
    console.log("from task card gtc:" , globalTiggerCompleted);
    const removeTaskCard = (taskname) => {
       
       const n = removeTask(taskname);
        setglobalTigger(!globalTigger);
       return n; 
    }

const obj = {task:props.task,Priority:props.priority};
  return (
    <div className="card w-[92%] bg-[#fff] h-[12vmin] flex">
    <div className="completeholder w-[10%]  h-full flex justify-center items-center">
        { props.type != "completed" && <div className="container flex justify-center items-center">
            <div className="round" id={props.task}>
            <input type="checkbox" className="c1" onClick={()=>{comletedTask(obj); removeTaskCard(props.task); setglobalTiggerCompleted(!globalTiggerCompleted); let inputs = document.querySelectorAll('.c1');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
            }}} />
            
        </div>
        
</div>
}
{ props.type === "completed" && <div className="container ">
            <div className="btnholder ml-1 "><div className=' text-[#fff] ' onClick={()=>{ Addtask(obj); removeTaskCompleted(props.task);  setglobalTigger(!globalTigger); setglobalTiggerCompleted(!globalTiggerCompleted)}}>Revert
                <img className='mb-5 ' src="left-chevron.png" alt="" height={25} width={25}/></div></div>
        
</div>
}
    </div>
    <div className="textholder text-[#000000] pl-1 ml-1 w-[82%] ">

        <div className="text" ><p>{props.task}</p></div>
        <div className="flag  mt-1 h-[4vmin] w-full ">
            {props.priority === "3" && <img src="pin.png"  className= 'max-w-full max-h-full object-contain' alt="" />}
            {props.priority === "2" && <img src="flag.png"  className= 'max-w-full max-h-full object-contain' alt="" />}
            {props.priority === "1" && <img src="red-flag.png"  className= 'max-w-full max-h-full object-contain' alt="" />}

        </div>
    </div>
    {props.type != "completed" &&
    <div className="removeholder w-[8%] mt-2 mr-1 h-full p-1">
        <img src="delete.png" className='max-w-full max-h-full object-contain' alt="" onClick={()=>{removeTaskCard(props.task)}}/>
    </div>
    }
     {props.type == "completed" &&
    <div className="removeholder w-[8%] mt-2 mr-1 h-full p-1">
        <img src="delete.png" className='max-w-full max-h-full object-contain' alt="" onClick={()=>{removeTaskCompleted(props.task); setglobalTiggerCompleted(!globalTiggerCompleted); }}/>
    </div>
    }

</div>

  )
}

export default TaskCard
