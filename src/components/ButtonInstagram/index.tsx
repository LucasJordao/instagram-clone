import style from './buttonInstagram.module.scss'

interface Props{
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    text?: string,
    disabled?: boolean
}

export default function ButtonInstagram({onClick = (() => {}), text="", disabled = false}: Props){
    return (
        <button className={style.buttonInstagram} onClick={event => onClick(event)} disabled={disabled}>
            {text}
        </button>
    )
}