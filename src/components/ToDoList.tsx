import React from "react";

interface TodoItem {
  id: string;
  text: string;
}

interface TodoListProps {
  items: TodoItem[];
}

const ToDoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
