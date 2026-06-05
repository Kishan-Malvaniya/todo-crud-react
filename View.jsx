import React, { useEffect }  from "react";

function View() {
    const [todos, setTodos] = React.useState([]);   
    useEffect(() =>{
        fetch("https://akashsir.in/atproject/at-todo/api/todo-list-api.php")
        .then(res =>res.json())
        .then(res => {
            console.log(res);
            setTodos(res.todo_list)
        })
        .catch(err=>console.log(err))
    },[])
     
    const handleEdit = (todo) => {
        
    };

    return(<div>
        
        <table border='2'>
            <thead> 
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Details</th>
                    <th>Image</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.todo_id}</td>
                        <td>{todo.todo_title}</td>
                        <td>{todo.todo_details}</td>
                        <td>
                            <img width={50} src={todo.todo_image}/>
                        </td>
                        <td>{todo.todo_date}</td>
                        <td>
                            <button  type="button" onClick={()=> handleEdit(todo)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
export default View;