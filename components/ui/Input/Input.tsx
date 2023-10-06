import classes from "./Input.module.scss"
import React, { ChangeEvent } from "react"
import cn from "classnames"
import InputMask from "react-input-mask"

type InputProps = {
    title: string
    value: string | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string
    placeholder?: string
    className?: string
    isError?: boolean
    type?: string
}

const Input = ({ className, name, isError, onChange, placeholder, value, type = "text", title }: InputProps) => {
    return (
        <div className={cn(classes.Wrap, className, { [classes.Error]: isError })}>
            {type === "tel" ? (
                <InputMask
                    type={type}
                    className={classes.Field}
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    mask="+7 (999) 999-99-99"
                ></InputMask>
            ) : null}

            {type === "text" ? (
                <input
                    className={classes.Field}
                    name={name}
                    onChange={onChange}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                />
            ) : null}
            <label className={classes.Title}>{title}</label>
        </div>
    )
}

export default Input
