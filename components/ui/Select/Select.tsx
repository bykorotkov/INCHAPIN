import React from "react"
import ReactSelect from 'react-select'

interface OptionsType {
    value: string;
    label: string;
}

const options: OptionsType[] = [
    { value: 'chocolate', label: 'Визуальный выбор'},
    { value: 'strawberry', label: 'Выбор по параметрам'}
]

const colorStyles = {
    control: (styles: any) => ({...styles , backgroundColor: '#2F80ED', color: '#fff', borderRadius: '100px',
        width: '203px', borderColor: '#2F80ED', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px',
        lineHeight: '13px', cursor: 'pointer', transition: "all .25s ease", padding: '0 0 0 10px', whiteSpace: 'nowrap',
        "&:hover": {
            opacity: '0.8'
        }}),
    // option: (styles, {data, isDisable, isFocused, isSelected}) => {
    //     return {...styles, color: '#000', isSelected: data.color}
    // }
    placeholder: (styles: any) => ({...styles, color: '#fff', fontSize: '13px', fontWeight: '600', position: 'absolute',
        top: '30%', transition: 'all .25s ease',
        "&:hover": {
            top: '-130%'
        }}),
    dropdownIndicator: (styles: any) => ({...styles, color: '#fff'})
}

const Select = () => {
    return (
        <div>
            <ReactSelect
                options={options}
                styles={colorStyles}
                placeholder='Выбрать квартиру'
                components={{ IndicatorSeparator: () => null}}
            />
        </div>
    )
}

export default Select