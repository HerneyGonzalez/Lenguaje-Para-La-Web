import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
export const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    if(isLoading){
        return <div>Cargando...</div>
    }
    return (
        isAuthenticated && (
            <small id="name" className="text-secondary me-2">
                {user.name}
            </small>
        )
    )
}