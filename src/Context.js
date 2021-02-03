import React, { useState, createContext, useContext } from "react";

export const Context = createContext();

export const Prov = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <Context.Provider
            value={{
                showSidebar,
                sidebar
            }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;
