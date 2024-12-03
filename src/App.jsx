import React, { createContext } from 'react'
import ToDoComponent from './Components/ToDoComponent'
import TaskCompleted from './Components/TaskCompleted'
import UserContext from './utils/UserContext'
import { useState } from 'react'

const App = () => {
  const [globalTigger,setglobalTigger] = useState(0);
 
  return (
    <>
    <UserContext.Provider value={{globalTigger:globalTigger,setglobalTigger}}>
    <div className='holder flex flex-wrap bg-purple text-[#ffff]'>
    <div className="leftComponent w-[100vw] md:w-[50vw] ">
    <ToDoComponent/>
    </div>
    <div className="rightComponent w-[100vw] md:w-[50vw]  md:border-l-[1px]">
      <TaskCompleted/>
    </div>
    </div>
    
    </UserContext.Provider>
    </>
  )
}


export default App
