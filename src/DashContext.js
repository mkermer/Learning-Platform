import React, { useState, createContext } from "react";


const DashContext = createContext();

export const DashProvider = (props) => {
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

export default DashContext;