import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../common/utils/cookieJs";

export default function Private(){
    
    const token = getCookie("token")
    if(token !== null && token !== undefined){
        return (
            <Outlet />
        )
    }else{
        return <Navigate to="/login" />
    }
}