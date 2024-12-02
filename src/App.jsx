import React from 'react'
import ToDoComponent from './Components/ToDoComponent'

const App = () => {
  return (
    <>
    <div className="holder flex bg-[#630330] text-[#fff]">
    <div className="leftComponent w-[50vw] border-[1px] h-[100vh]">
    <ToDoComponent/>
    </div>
    <div className="rightComponent w-[50vw] border-[1px] h-[100vh]"></div>
    </div>
    
    
    </>
  )
}

export default App
