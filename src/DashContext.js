import React, { useState, createContext } from "react";


export const DashContext = createContext({showSidebar: () => {DashContext.sidebar = !DashContext.sidebar;}, sidebar: false});
DashContext.showSidebar = () => {
    console.log("function invoked");
    DashContext.sidebar = !DashContext.sidebar;
}


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


