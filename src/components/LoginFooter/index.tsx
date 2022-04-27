import style from './signUpFooter.module.scss'
import { Link } from 'react-router-dom'

interface Props{
    to?: string,
    textSpan?: string,
    textLink?: string
}

export default function LoginFooter({to = "/", textSpan = "", textLink = ""}: Props){
    return (
        <footer className={style.footerSignUp}>
            <span>{textSpan} </span> <Link to={to}>{textLink}</Link>
        </footer>
    )
}