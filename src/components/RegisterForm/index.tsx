import style from './register.module.scss'
import InputInstagram from '../InputInstagram'
import ButtonInstagram from '../ButtonInstagram'
import InputPassword from '../InputPasssword';
import { useState } from 'react'

export default function Register(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [step, setStep] = useState(1)

    function changeStep(){
        if(step < 3){
            setStep(step + 1)
        }
    }

    return (
        <section className={style.formContainer}>
            <article className={`${style.stepRegister} ${step == 1 ? style.stepVisible : ''}`}>
                <span>Create username</span>

                <small>Pick a username for you new account. You can always change it later</small>

                <InputInstagram placeholder="Username" value={username} onChange={event => setUsername(event.target.value)}/>

                <ButtonInstagram text="Next" onClick={() => changeStep()} disabled={!(username.length > 5)}/>
            </article>

            <article className={`${style.stepRegister} ${step == 2 ? style.stepVisible : ''}`}>
                <span>Create a password</span>

                <small>We can remember the password, so you won't need to enter it on your iCloud devices.</small>

                <InputPassword value={password} onChange={event => setPassword(event.target.value)}/>
                <ButtonInstagram text="Next" onClick={() => changeStep()} disabled={!(password.length > 5)}/>
            </article>
            
            <article className={`${style.stepRegister} ${step == 3 ? style.stepVisible : ''}`}>
                <span>Welcome to Instagram, {username}</span>

                <small>We'll add the email from {username} to {username}. You can change your contact info and username anytime.</small>

                <ButtonInstagram text="Complete Sign Up" onClick={() => alert("Login concluido")} />
            </article>

        </section>
    )
}