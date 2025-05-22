import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../store/useLoginStore";



const MainPage = () => {
     const user = useLoginStore((state) => state.user)
     const loggedIn = useLoginStore((state) => state.loggedIn);
     const logout = useLoginStore((state) => state.logout);
     const navigate = useNavigate();

     console.log(user)
     console.log(loggedIn)

     useEffect(() => {    
        if(loggedIn === false){
           navigate("/login")
           window.location.reload();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        }

        if(!user) {
          return <p>Ucitava se ....</p>
        }

     },[loggedIn, navigate])

    return (
        <>
            <div>
                {user &&  <p>Ulogovani ste kao korisnik - <span style={{fontWeight:"bold"}}>{user.username}</span> </p>}
            </div>

            <button onClick={() => {logout(); navigate("/login")}}>Odjavi se</button>
        </>

    )
}



export default MainPage;