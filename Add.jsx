 import React from "react";
 import axios from "axios";
 
 
 function Add() {
   const [txt1, settxt1] = React.useState("")
  const [txt2, settxt2] = React.useState("")

   const saveData = () => {
     var myform = new FormData()
     myform.append("todo_title",txt1)
     myform.append("todo_details",txt2)
     axios.post("https://akashsir.in/atproject/at-todo/api/todo-add-api.php",myform)
     .then(res =>{
       console.log(res.data)
       if(res.data.flag == '1') {
         alert(res.data.message)  
       }else {
         alert("T Problem")
       }
     })
     .catch(err => alert(err))
     settxt1("")
     settxt2("")
   }
   return(<div className="container"> 
    <div className="form-card">
     <br/>
     Title : <input type="text" value={txt1} onChange={(e) => settxt1(e.target.value)}/><br/>
     Details : <input type="text" value={txt2} onChange={(e) => settxt2(e.target.value)}/><br/>
     <input type="button" value="Add" onClick={saveData}/>
     </div>
   </div>);
 }
 export default Add;