import { Todo } from "./types/types";

export const getAllTodos = async (): Promise<Todo[]> => {
  //   const res = await fetch("http://localhost:3001/todos");
  const res = await fetch("/api/todos");
  const todos = res.json();
  return todos;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();
  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deleteTodo = res.json();
  return deleteTodo;
};
