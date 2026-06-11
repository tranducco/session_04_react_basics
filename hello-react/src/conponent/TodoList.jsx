import React from "react";
function TodoList({Props}) {
    return (
        <ul id="todoList" className="list-group">
            {props.todos.map((todo) => (
                <TodoItems key={todo.id} Props={todo} />
            ))}
        </ul>
    );
}
export default TodoList;