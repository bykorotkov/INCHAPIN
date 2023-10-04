import React, { useEffect } from "react"
import classes from './Modal.module.scss'
import { closeModal } from "@/store/reducers/modalSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"

type ModalType = {
    innerClassName?: string
    buttonClassName?: string
}
const Modal = ({}) => {
    const dispatch = useAppDispatch();
    const { isOpen, content } = useAppSelector((state) => state.modalReducer);

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {content}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal