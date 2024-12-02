import React from 'react'

const TaskCard = (props) => {
  return (
    <div className="card w-[92%] bg-[#fff] h-[12vmin] flex">
    <div className="completeholder w-[10%]  h-full flex justify-center items-center">
        <div className="circleholder w-[4vmin] h-[4vmin] rounded-[2vmin] border-[#000000] border-[1px]"></div>
        
    </div>
    <div className="textholder text-[#000000] pl-1 w-[82%] ">

        <div className="text" ><p>{props.task}</p></div>
        <div className="flag  mt-1 h-[4vmin] w-full ">
            {props.priority === "3" && <img src="pin.png"  className= 'max-w-full max-h-full object-contain' alt="" />}
            {props.priority === "2" && <img src="flag.png"  className= 'max-w-full max-h-full object-contain' alt="" />}
            {props.priority === "1" && <img src="red-flag.png"  className= 'max-w-full max-h-full object-contain' alt="" />}

        </div>
    </div>
    <div className="removeholder w-[8%] mt-2 mr-1 h-full p-1">
        <img src="delete.png" className='max-w-full max-h-full object-contain' alt="" />
    </div>


</div>

  )
}

export default TaskCard
