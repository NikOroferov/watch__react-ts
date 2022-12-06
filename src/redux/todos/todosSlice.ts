import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ITodosState{
  id: number;
  text: string;
  completed: boolean;
}

const initialState: ITodosState[] = [
  { id: 1, text: "Text todo", completed: false },
  { id: 2, text: "Text todo1", completed: false },
  { id: 3, text: "Text todo2", completed: false },
  { id: 4, text: "Text todo3", completed: false },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

  }
})