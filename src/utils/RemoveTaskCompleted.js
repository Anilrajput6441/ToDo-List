

const removeTaskCompleted = (taskname) => {
    let taskArray=[];
    
         taskArray = JSON.parse(localStorage.getItem("taskCompleted"));
    
    let newTaskArray = [];
    for (let index = 0; index < taskArray.length; index++) {
        if (taskArray[index][0] != taskname) {
            newTaskArray.push(taskArray[index]);
        }
        
    }
    
    localStorage.setItem("taskCompleted",JSON.stringify(newTaskArray))
   
    return newTaskArray.length;
    }
    


export default removeTaskCompleted;
