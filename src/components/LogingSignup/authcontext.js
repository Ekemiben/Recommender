import { createContext, useState } from "react";


export const  MainContext = createContext({isLogin:false});

export const MainProvider = ({children})=>{

    const [user, setUser] = useState('');
    return(
        < MainContext.Provider value = {{user, setUser}}>
            {children}
        </MainContext.Provider>
    )
}