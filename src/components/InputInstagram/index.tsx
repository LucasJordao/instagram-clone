import React from 'react'
import style from './inputInstagram.module.scss'

interface Props{
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: any
}

export default function InputInstagram({placeholder = "", onChange = (() => {}), value = ""} : Props){
    return (
        <input type="text" placeholder={placeholder} onChange={event => onChange(event)} value={value} className={style.loginInstagram}/>
    )
}