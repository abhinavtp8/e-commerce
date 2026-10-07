import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [
      { id: 1, title: "Learn React", description: "Understanding basics", completed: false },
      { id: 2, title: "Tailwind CSS", description: "Add styling", completed: true }
    ],
    filter: "All" 
  },
  reducers: {
    addTask: (state, action) => {
      state.tasksList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasksList = state.tasksList.filter(task => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasksList.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.tasksList.find(t => t.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, deleteTask, toggleComplete, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;