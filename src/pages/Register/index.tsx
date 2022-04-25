import style from './register.module.scss'
import RegisterForm from '../../components/RegisterForm'

export default function Register(){
    return (
        <div className={style.registerContainer}>
           <RegisterForm />
        </div>
    )
}