import style from './inputPassword.module.scss'
import {ReactComponent as EyeSlashIcon} from '../../../assets/icons/eye-slash-solid.svg'
import {ReactComponent as EyeSolid} from '../../../assets/icons/eye-solid.svg'
import { useState } from 'react'

export default function InputPassword(){

    const [hiddePassword, setHidePassword] = useState(false)
    const [typeInput, setTypeInput] = useState("password")

    function hidePassword(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        setHidePassword(!hiddePassword)
        setTypeInput(hiddePassword ? "password" : "text")
        event.preventDefault()
    }

    return (
        <div className={style.passwordInputArea}>
            <input type={typeInput} placeholder="Password" className={style.loginInput} />
            <button onClick={event => {
                hidePassword(event)
            }}>
                <EyeSlashIcon width="20px" fill="gray" style={{
                    display: hiddePassword ? "none" : "inline-block"
                }}/>

                <EyeSolid width="20px" fill="gray"
                    style={{
                        display: hiddePassword ? "inline-block" : "none"
                    }}
                />
            </button>
        </div>
    )
}