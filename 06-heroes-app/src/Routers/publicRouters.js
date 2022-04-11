import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/authContext"

export const PublicRouters = ({children})=>{
    const {user} = useContext(AuthContext);

    return !user.logged 
        ? children
        : <Navigate to={'/'}/>
    
}