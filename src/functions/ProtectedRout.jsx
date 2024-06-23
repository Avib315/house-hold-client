import { useEffect, useState } from "react";
import { isAuthenticated } from "./webApi";
import LoadingPage from "../pages/LoadingPage/LoadingPage";


export default function ProtectedRout({ element }) {
    const [isAuth, setIsAuth] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await isAuthenticated();
            setLoading(false);
            setIsAuth(authStatus);
        }
        checkAuth();
    }, []);

    return (
        <>
            {!loading ?
                (isAuth ?
                    <>  {element}  </>
                    : <div>חזרה להתחברות:  </div>) : <LoadingPage/>}

        </>)
}
