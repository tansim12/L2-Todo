import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface ITodo {
  title: string;
  id: string;
  description: string;
  priority: "high" | "medium" | "low";
  isCompleted?: boolean;
}

interface IInitialState {
  todos: ITodo[];
}

const initialState: IInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    deleteTodo: (state, action) => {
      const filterTodo = state.todos.filter(
        (item) => item.id !== action.payload
      );
      state.todos = filterTodo;
    },
    toggleIsComplete: (state, action) => {
      const findTodo = state?.todos?.find(
        (item) => item?.id === action?.payload
      );

      findTodo!.isCompleted = !findTodo?.isCompleted;

      state.todos.sort((a, b) => {
        // Type assertion to ensure isCompleted is treated as boolean
        const isCompletedA = a.isCompleted as boolean;
        const isCompletedB = b.isCompleted as boolean;
        return Number(isCompletedA) - Number(isCompletedB);
      });
    },

    filterPriority: (state, action) => {
      state.todos = state.todos?.filter(
        (item) => item?.priority === action?.payload
      );
    },

    editTodo: (state, action) => {
      const findTodo = state.todos.find(
        (item) => item?.id === action?.payload?.id
      );
      if (findTodo) {
        findTodo.title = action.payload.title;
        findTodo.description = action.payload.description;
        findTodo.priority = action.payload.priority;
        findTodo.isCompleted = action.payload.isCompleted;
        // Add any other properties that need to be updated
      } else {
        console.error(`Todo with id ${action.payload.id} not found.`);
      }

    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleIsComplete,
  filterPriority,
  editTodo,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
