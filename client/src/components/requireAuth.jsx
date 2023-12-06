import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/authContext";

const RequireAuth = () => {
    const { authInfo } = useContext(AuthContext)
    const location = useLocation();

    return (
        authInfo?.uid ?
        <Outlet/>
        : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth;