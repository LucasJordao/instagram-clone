import style from './register.module.scss'
import RegisterForm from '../../components/RegisterForm'
import LoginFooter from '../../components/LoginFooter'

export default function Register(){
    return (
        <>
            <div className={style.registerContainer}>
              <RegisterForm />
            </div>
            
            <LoginFooter textSpan="Do you have an account?" textLink="Sing In."/>
        </>
        
    )
}