 import React from "react";
 import axios from "axios";

 function Delete() {
   const [id, setid] = React.useState("")
  
   const deleteData = () => {
     var myform = new FormData()
     myform.append("todo_id",id)

   axios.post("https://akashsir.in/atproject/at-todo/api/todo-delete-api.php",myform)
    .then(res => {
       console.log(res.data)
      if(res.data.flag == '1') {
        alert(res.data.message)
      }else {
        alert("No delete deta")  
       }
     })
     .catch(err => alert(err))
     setid("")
   }

  return(<div>
  Id: <input type="text" value={id}  onChange={(e) => setid(e.target.value)}/> <br/>
      <input type="button" value="Delete" onClick={deleteData}/>
  </div>);

 }
 export default Delete;