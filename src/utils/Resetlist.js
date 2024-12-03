import ToDoComponent from "../Components/ToDoComponent";
import UserContext from "./UserContext";
import { useContext } from "react";

const Resetlist=()=>{
    // const {globalTiggerCompleted,setglobalTiggerCompleted} = useContext(UserContext)
    if (localStorage.getItem("task")|| localStorage.getItem("taskCompleted")) {
       localStorage.clear()
       
    // console.log("inside reset list")

    } 
    
}

export default Resetlist;

