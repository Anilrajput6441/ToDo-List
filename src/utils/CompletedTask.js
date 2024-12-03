const comletedTask=(obj)=>{
   
    if (localStorage.getItem("taskCompleted")) {
        const prevArr=JSON.parse(localStorage.getItem("taskCompleted"))
        const newObj=[obj.task,obj.Priority]
        prevArr.push(newObj)
        localStorage.setItem("taskCompleted",JSON.stringify(prevArr))
        return prevArr.length
        // alert("item found");
        
    } else {
        
        
        const arr=[[obj.task,obj.Priority]];
        localStorage.setItem("taskCompleted",JSON.stringify(arr))
        console.log(localStorage);
        return arr.length
        // alert("item not found")
        
    }
}
export default comletedTask;