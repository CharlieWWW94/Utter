import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(note => note.title !== action.payload);
    },
  },
});

// actions
export const {addNote, removeNote} = audioSlice.actions;
// reducer
export default audioSlice.reducer;
// selectors
export const selectNotes = state => state.audio.notes;
