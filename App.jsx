import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Add from "./Add";
import View from "./View";
import Delete from "./delete";
import Update from "./Update";

function App(){
  return(
    <Router>
      <Link to="/add">Add</Link> |
      <Link to="/view">View</Link> |
      <Link to="/delete">Delete</Link>|
      <Link to="/update">Update</Link>
      <Routes>
        <Route element={<Add/>} path="/add"/>
        <Route element={<View/>} path="/view"/>
        <Route element={<Delete/>} path="/delete"/>
        <Route element={<Update/>} path="/update"/>
      </Routes>
    </Router>
  )
}
export default App;