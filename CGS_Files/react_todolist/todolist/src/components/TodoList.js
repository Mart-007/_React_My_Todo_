import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) =>{
    return (
        <div>
            <div className="todo-container">
                {/* <ul className="todo-list"></ul> */}
                {todos.map((todo) => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        key={todo.id} 
                        text={todo.text} />
                ))}
            </div> 
            
        </div>
    )
}

export default TodoList
