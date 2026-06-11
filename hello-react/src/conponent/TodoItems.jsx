import React from "react";
function TodoItems({Props}) {
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${Props.completed ? "completed" : ""}`}> 
            <span>{Props.task}</span>
            <button className="btn btn-sm btn-success mr-2">Complete</button>
            <button className="btn btn-sm btn-danger">Delete</button>
        </li>
    );
}
export default TodoItems;