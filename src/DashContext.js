import React, { useState, createContext } from "react";


export const DashContext = createContext({showSidebar: () => {}, sidebar: {}});


export const Prov = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <DashContext.Provider
            value={{
                showSidebar,
                sidebar
            }}>
            {props.children}
        </DashContext.Provider>
    )
}


