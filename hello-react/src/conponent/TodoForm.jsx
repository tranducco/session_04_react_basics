import React from 'react';

// Đổi tên function thành TodoForm
function TodoForm(onAddTodo) {
    const HandleSubmit = (e) => {
        e.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: e.target.elements.todoText.value,
        completed: false
    };
    onAddTodo(newTodo);
}
};
    return (
        <form onSubmit={HandleSubmit}>
            <input type="text" name="todoText" placeholder="Nhập công việc..." required />
            <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Thêm</button>
        </form>
    );
export default TodoForm; // Nhớ export đúng tên mới