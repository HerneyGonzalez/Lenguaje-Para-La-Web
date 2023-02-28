import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
export const Logoutbutton = () => {
    const { logout } = useAuth0();
    return <button className="btn btn-outline-danger" onClick={() => logout({ returnTo: window.origin })}><span>Cerrar sesión</span></button>
}