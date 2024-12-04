import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const TitleContext = createContext(null);

// eslint-disable-next-line react/prop-types
const TitleProvider = ({children}) => {

    const [title, setTitle] = useState('');

    const location = useLocation();

    useEffect(() => {

        let name;
        if (location.pathname === '/') {
            name= 'Home | Eco-Wonderland'
        } else if (location.pathname === '/profile') {
            name = 'Profile | Eco-Wonderland'
        } else if (location.pathname === '/update') {
            name = 'Update User Profile | Eco-Wonderland'
        }   else if (location.pathname === '/auth/login') {
            name = 'Login | Eco-Wonderland'
        }  else if (location.pathname === '/auth/signup') {
            name = 'SignUp | Eco-Wonderland'
        } else if (location.pathname === '/auth/resetPassword') {
            name = 'Forget Password | Eco-Wonderland'
        }  else  {
            name = title + ' Detail | Eco-Wonderland'
        } 

        document.title = name;
      }, [title, location.pathname]);


    const dynamicTitle =[title, setTitle];

    return (
        
        <TitleContext.Provider value={dynamicTitle}>
            {children}
        </TitleContext.Provider>
    );
};

export default TitleProvider;