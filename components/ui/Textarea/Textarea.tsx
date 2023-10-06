import classes from "./Textarea.module.scss"
import React, { ChangeEvent } from "react"
import cn from "classnames"

type TextareaProps = {
    title: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    name?: string
    placeholder?: string
    className?: string
}

const Textarea = ({ onChange, name, className, placeholder, value, title }: TextareaProps) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            <div className={classes.Title}>{title}</div>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={classes.Field}
            />
        </div>
    )
}

export default Textarea
