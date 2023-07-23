import React from "react";
import { useState } from "react";

const LanguageContext = React.createContext();

function LanguageProvider(props) {
    const [usingVN, setUsingVN] = useState(true);
    return (
        <LanguageContext.Provider value={{ usingVN, setUsingVN }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageProvider };