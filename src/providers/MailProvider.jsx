import { createContext, useState } from "react";



export const MailContext = createContext('');

// eslint-disable-next-line react/prop-types
const MailProvider = ({children}) => {

   const [mail, setMail] = useState(null);

    return (
        <MailContext.Provider value={[mail, setMail]}>
            {children}
        </MailContext.Provider>
    );
};

export default MailProvider;