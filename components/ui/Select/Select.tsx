import React from "react"
import ReactSelect from 'react-select'
import classes from './Select.module.scss'

interface OptionsType {
    value: string;
    label: string;
}

const options: OptionsType[] = [
    { value: 'Визуальный выбор', label: 'Визуальный выбор'},
    { value: 'Выбор по параметрам', label: 'Выбор по параметрам'}
]

const colorStyles = {
    control: (styles: any) => ({...styles , backgroundColor: '#2F80ED', color: '#fff', borderRadius: '100px',
        width: '203px', borderColor: '#2F80ED', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px',
        lineHeight: '13px', cursor: 'pointer', transition: "all .25s ease", padding: '0 0 0 10px', whiteSpace: 'nowrap',
        "&:hover": {

        }}),
    option: (styles:any) => {
        return {...styles, cursor: 'pointer'}
    },
    placeholder: (styles: any) => ({...styles, color: '#fff', fontSize: '13px', fontWeight: '600', position: 'absolute',
        top: '30%', transition: 'all .25s ease', overflow: 'hidden',
        "&:hover": {
            top: '-130%'
        }}),
    dropdownIndicator: (styles: any) => ({...styles, color: '#fff'})
}

const Select = () => {
    return (
        <div className={classes.SelectContainer}>
            <ReactSelect
                options={options}
                styles={colorStyles}
                placeholder=''
                components={{ IndicatorSeparator: () => null}}
                className={classes.Select}
            />
            <div className={classes.Spans}>
                <span>Выбрать квартиру</span>
                <span>Выбрать квартиру</span>
            </div>
        </div>
    )
}

export default Select