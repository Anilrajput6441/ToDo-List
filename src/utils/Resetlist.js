import ToDoComponent from "../Components/ToDoComponent";
const Resetlist=()=>{
    if (localStorage.getItem("task")) {
       localStorage.clear()
       
    // console.log("inside reset list")

    } 
    
}
export default Resetlist;

