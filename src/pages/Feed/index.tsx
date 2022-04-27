import { Navigate } from "react-router-dom"
import { getCookie } from "../../common/utils/cookieJs"

export default function Feed() {
    const token = getCookie("token")

    if(token != null && token != undefined){
        return (
            <>
                <span style={{color:"white"}}>Logado</span>
            </>
        )
    }else{
        return(
            <Navigate to={"/login"}/>
        )
    }
}