import { createContext , useEffect,useState } from "react";
import GraphClient from "../config/GraphClient";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
    const [logged, setLogged] =useState(false)
    const [user, setUser] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {checkToken();
    },[]);
   
    const checkToken = () =>{
       const accessToken = localStorage.getItem('accessToken');
       if(accessToken){  
        setLogged(true);
        getInfo();
        }
    }
    
   
    const singIn =async () =>{
       const token = await GraphClient.getAccessToken();
       if (token) {
           localStorage.setItem('accessToken',token);

           getInfo();
           navigate("home");
       }
         
    }

    const signOut =()=>{
        localStorage.clear();
        sessionStorage.clear();
        setLogged(false);
        navigate("login");
    }

    const getInfo = async () =>{
        try {
            setLogged(true);
            const userRes = await GraphClient.getUSer();
            setUser(userRes);
            /* console.log(user); */
            
        } catch (error) {
        }
       
    }

    console.log(user,"respuesta");
    return (
        <AuthContext.Provider
        value={{
            logged,
            singIn,
            signOut,
            user
        }}
        >
            {children}

        </AuthContext.Provider>
    )
}