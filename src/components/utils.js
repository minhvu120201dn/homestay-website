import React, { useContext } from "react";

import { LanguageContext } from "../contexts/language";

function GetLanguage(props) {
    const { usingVN } = useContext(LanguageContext);
    return (
        <> { usingVN ? props.vn : props.en } </>
    )
}

export { GetLanguage };