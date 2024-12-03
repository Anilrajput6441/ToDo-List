const removeTask = (taskname) => {
    let taskArray = JSON.parse(localStorage.getItem("task"));
    let newTaskArray = [];
    for (let index = 0; index < taskArray.length; index++) {
        if (taskArray[index][0] != taskname) {
            newTaskArray.push(taskArray[index]);
        }
        
    }
    localStorage.setItem("task",JSON.stringify(newTaskArray))
    return newTaskArray.length;

}
export default removeTask;
