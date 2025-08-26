// this is necessary to allow for context to be used as the conditional renderer, in app.tsx context is declared by cannot be used. Will always return undefined.

import React from "react";
import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import Populated from "./populated";
import Empty from "./empty";
import Sidebar from "../sidebar/sidebar";

type Props = {
    isSidebarOpen: boolean;
    handleSidebar: () => void;
}

const MainPage: React.FC<Props> = ({ isSidebarOpen, handleSidebar }) => {
    const colourContext = useContext(ColourContext);
    const renderEmpty = ((colourContext?.colours.length === 0 || colourContext?.colours === undefined))
    const renderPopulated = (((colourContext?.colours?.length ?? 0) > 0))
    const renderSidebar = (isSidebarOpen && !renderEmpty)
    return (
        <div className='whole-page'>
          { renderSidebar && <Sidebar handleSidebar={handleSidebar}/>}
          { renderEmpty && <Empty handleSidebar={handleSidebar}/>}
          { renderPopulated && <Populated /> }
        </div>
  )
};

export default MainPage;