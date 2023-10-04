import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
    isOpen: boolean;
    content: JSX.Element | null;
}

const initialState: ModalState = {
    isOpen: false,
    content: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<JSX.Element>) {
            state.isOpen = true;
            state.content = action.payload;
        },
        closeModal(state) {
            state.isOpen = false;
            state.content = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;