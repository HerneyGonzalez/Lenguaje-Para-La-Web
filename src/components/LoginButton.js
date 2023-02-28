import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return  <button id="ingresarBtn" className="btn btn-outline-secondary" onClick={() => loginWithRedirect()}><span>Ingresar</span></button>
    
}