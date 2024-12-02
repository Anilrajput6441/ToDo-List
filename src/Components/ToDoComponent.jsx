import React from 'react'

const ToDoComponent = () => {
  return (
    <>
    <div>
    <p className='mt-4 ml-3 font-bold text-[6vmin]'>Add Task</p>
    <div className='w-[50vw] text-[#000000] flex mt-10 ml-3'>
          <input type="text" placeholder='Add Task...' className='p-2 h-[7vmin] w-[70%]' />
          <select name="Priority" id="Priority " className='h-[7vmin] bg-[#C0C0C0] w-[10%] pl-1'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <div className="additionholder p-2 bg-[#DC4D01] h-[7vmin] w-[15%] w-[10%] text-[#fff] ">
            <p className='text-center'>Add</p>
              
          </div>
      </div>
      <div className="Taskcardholder"></div>
      <div className="Buttonholder">
        <button className='bg-[#87CEEB] p-2 mt-3 ml-3'>Clear All</button>
      </div>
      </div>
      </>
  )
}

export default ToDoComponent

