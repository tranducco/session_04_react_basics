import React from "react";
function TodoList({Props}) {
    return (
        <div>
            <h2 className="mb-4">Todo List</h2>
            <TodoAdd />
            <TodoStart>
                <TodoItems Props={Props} />
            </TodoStart>
        </div>
    );
}
export default TodoList;