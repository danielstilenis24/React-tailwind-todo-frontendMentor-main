import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    { id: 1, title: "Go to the gym 1", completed: true },
    { id: 2, title: "Go to the gym 2", completed: false },
    { id: 3, title: "Go to the gym 3", completed: true },
    { id: 4, title: "Go to the gym 4", completed: false },
    { id: 5, title: "Go to the gym 5", completed: true },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div
            className="min-h-screen
        bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat"
        >
            <Header />
            <main className="container mx-auto mt-8 px-4 ">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TodoComputed />
                <TodoFilter />
            </main>

            <footer className="mt-8 text-center text-gray-600">
                Drag and frop to reorder list
            </footer>
        </div>
    );
};
export default App;
