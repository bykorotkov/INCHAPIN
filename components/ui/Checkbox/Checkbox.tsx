import classes from "./Checkbox.module.scss"
import { ChangeEvent } from "react"
import cn from "classnames"

type CheckboxProps = {
    checked: boolean
    onChange: (e: boolean) => void
    name?: string
}

const Checkbox = ({ checked, onChange, name }: CheckboxProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.currentTarget.checked)
        }
    }

    return (
        <label
            htmlFor={name}
            className={classes.Label}
        >
            <input
                className={classes.Input}
                id={name}
                name={name}
                checked={checked}
                onChange={onChangeHandler}
                type="checkbox"
            />
            <span className={cn(classes.Checkbox, { [classes.Active]: checked })}></span>
        </label>
    )
}

export default Checkbox
