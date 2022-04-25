import style from './signUpFooter.module.scss'

export default function SignUpFooter(){
    return (
        <footer className={style.footerSignUp}>
            <span>Don't have an account? </span> <a href="">Sign Up.</a>
        </footer>
    )
}