import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [ // initial state of the todos array
        { id: "1", title: "Learn React" },
    ],
}

function Hello() {
    console.log("Hello World")
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // addTodo: Hello,
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
            };
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            const { todoId, title } = action.payload;
            console.log(todoId)
            console.log(title)
            console.log(action)
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
        updateTodo: (state, action) => {
            const { todoId, newTodo } = action.payload;
            console.log(action)
            console.log(todoId)
            // state.todos = state.todos.map((todo) => todo.id === todoId ?   : todo)
            state.todos = state.todos.map((todo) => { todo.id === todoId ? newTodo : todo })
        },
    },
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;