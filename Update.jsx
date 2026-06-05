import React from "react";
import axios from "axios";


function Update() {
    const [id, setid] = React.useState("")
    const [title, settitle] = React.useState("")

    const UpdateData = () => {
        var myform = new FormData()
        myform.append("todo_id",id)
        myform.append("todo_title",title)

    axios.post("https://akashsir.in/atproject/at-todo/api/todo-update-api.php",myform)
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
  settitle("")
    }
return(<div>
    ID : <input type="text"  value={id} onChange={(e) => setid(e.target.value)}/> <br/>
    TITLE : <input type="text" value={title} onChange={(e) => settitle(e.target.value)}/> <br/>
    <input type="button" value="Update" onClick={UpdateData}/>
</div>)
}
export default Update;