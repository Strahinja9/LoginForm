import { useState } from "react"
import USERS from "../data/users.json"
import { useNavigate } from "react-router";
import useLoginStore from "../store/useLoginStore";


const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage]= useState(null);
    const login = useLoginStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

       const userExist = USERS.find( 
        (user => user.username ===userName && user.password === password)
       );

       if (!userExist) {
        setMessage("Uneli ste neispravne podatke");
        return;
       }

        navigate("/mainpage");
        login(userExist);
               
    }


    return (
        <>
        <div>

        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value)} />
            <button>Prijavi se</button>
            
        </form>
        {message && <p>{message}</p>}
        </div>
        </>
        
    )
    
    
   
}



export default Login