import { useEffect, useState } from "react";
import { isAuthenticated } from "./webApi";
import NavBar from "../components/NavBar/navBar";


export default function ProtectedRout({ element }) {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await isAuthenticated();
            setIsAuth(authStatus);
        }
        checkAuth();
    }, []);

    return (<> {isAuth ?<>  {element}   <NavBar /> </>: <div>חזרה להתחברות:  </div>}</>)
}
