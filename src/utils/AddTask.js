const Addtask=(obj)=>{
    if (localStorage.getItem("task")) {
        const prevArr=JSON.parse(localStorage.getItem("task"))
        const newObj=[obj.task,obj.Priority]
        prevArr.push(newObj)
        localStorage.setItem("task",JSON.stringify(prevArr))
        return prevArr.length
        // alert("item found");
        
    } else {
        const arr=[[obj.task,obj.Priority]];
        localStorage.setItem("task",JSON.stringify(arr))
        return arr.length
        // alert("item not found")
    }
}
export default Addtask;