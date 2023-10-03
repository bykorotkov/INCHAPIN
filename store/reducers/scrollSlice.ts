import { createSlice } from "@reduxjs/toolkit";

interface ScrollState {
    scroll: number;
}

const initialState: ScrollState = {
    scroll: 0,
};

const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setScroll(state, action) {
            state.scroll = action.payload;
        },
    },
});

export const { setScroll } = scrollSlice.actions;

export default scrollSlice.reducer;