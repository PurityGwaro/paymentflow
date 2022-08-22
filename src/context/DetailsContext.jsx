import { createContext, useState } from "react";

const DetailsContext = createContext({}); 

export const DetailsProvider = ({children}) =>{
    const [details, setDetails] = useState({
        name: "",
        email: "",
        address1: "",
        address2: "",
        localGovernment: "",
        state: "",
        nameOnCard: "",
        cardType: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
    
    return(
        <DetailsContext.Provider value={{details, setDetails}}>
            {children}
        </DetailsContext.Provider>
    )
}

export default DetailsContext;