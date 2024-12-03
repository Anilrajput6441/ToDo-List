import React from 'react'
import ToDoComponent from './Components/ToDoComponent'
import TaskCompleted from './Components/TaskCompleted'

const App = () => {
  return (
    <>
    <div className='holder flex flex-wrap bg-[#e7e4f6] text-[#ffff]'>
    <div className="leftComponent w-[100vw] md:w-[50vw] h-[40vh]  md:h-[100vh]">
    <ToDoComponent/>
    </div>
    <div className="rightComponent w-[100vw] md:w-[50vw] h-[40vh] md:h-[100vh] md:border-l-[1px]">
      <TaskCompleted/>
    </div>
    </div>
    
    
    </>
  )
}

export default App
