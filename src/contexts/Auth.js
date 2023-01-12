import React, { useEffect, useState } from 'react';
import { init } from '../Utils/Web3Client';

export const AuthContext =  React.createContext(null);

const initialState = {
    isAuthenticated: false
}

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true)

    const setAuthSuccess = (isAuthenticated) => setState({isAuthenticated});

    const login = async () => {
        const selectedAccount = await init();
        localStorage.setItem("authDocUser", JSON.stringify(selectedAccount));
        setAuthSuccess(true);
    }

    const logout = () => {
        localStorage.removeItem("authDocUser");
        setAuthSuccess(false);
    }

    useEffect(() => {
        const user = localStorage.getItem("authDocUser");
        if(user !== null) {
            setAuthSuccess(true);
            setLoading(false)
        }else{
            setAuthSuccess(false)
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, login, logout}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
