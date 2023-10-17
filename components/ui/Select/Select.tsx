"use client"
import React, { useState } from "react"
import ReactSelect from "react-select"
import classes from "./Select.module.scss"

interface OptionsType {
    value: string
    label: string
}

const options: OptionsType[] = [
    { value: "/VisualPage", label: "Визуальный выбор" },
    { value: "/ParametersPage", label: "Выбор по параметрам" }
]

const colorStyles = {
    control: (styles: any) => ({}),
    menu: (styles: any) => ({ ...styles, width: "100%", minWidth: "100%", left: "0" }),
    option: (styles: any) => {
        return { ...styles, cursor: "pointer", color: "#000", textAlign: "center", padding: "15px 0" }
    }
}

const Select = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    function handleChange(selected: any) {
        setSelectedOption(selected.value)
        window.location.href = selected.value
    }

    return (
        <div className={classes.SelectContainer}>
            <ReactSelect
                options={options}
                styles={colorStyles}
                placeholder=""
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => null
                }}
                className={classes.Select}
                isSearchable={false}
                isClearable={false}
                value={null}
                onChange={handleChange}
            />
            <div className={classes.Spans}>
                <span>Выбрать квартиру</span>
                <span>Выбрать квартиру</span>
            </div>
        </div>
    )
}

export default Select
