import React from "react";
import "./sidebar.css"

type Props = {
    isSidebarOpen: boolean,
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen }) => {
    const sidebarClass = isSidebarOpen ? "sidebar open" : "sidebar";
    return (
        <>
            <div className={sidebarClass}>
                <div> This should toggle. </div>
            </div>
        </>
    );
}

export default Sidebar;