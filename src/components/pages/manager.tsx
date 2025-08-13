// this is necessary to allow for context to be used as the conditional renderer, in app.tsx context is declared by cannot be used. Will always return undefined.

import React from "react";
import { useContext } from "react";
import { ColourContext } from "../../context/colourContext";
import Populated from "./populated";
import Empty from "./empty";
import Sidebar from "../sidebar/sidebar";
import Info from "./info";

type Props = {
    isSidebarOpen: boolean;
    handleSidebar: () => void;
    isInfoOpen: boolean;
}

const MainPage: React.FC<Props> = ({ isSidebarOpen, handleSidebar, isInfoOpen }) => {
    const colourContext = useContext(ColourContext);
    const renderEmpty = (!isInfoOpen && (colourContext?.colours.length === 0 || colourContext?.colours === undefined))
    const renderPopulated = (!isInfoOpen && ((colourContext?.colours?.length ?? 0) > 0))
    const renderSidebar = (isSidebarOpen && !renderEmpty)
    return (
        <div className='whole-page'>
          { renderSidebar && <Sidebar handleSidebar={handleSidebar}/>}
          { renderEmpty && <Empty handleSidebar={handleSidebar}/>}
          { renderPopulated && <Populated /> }
          { isInfoOpen && <Info />}
        </div>
  )
};

export default MainPage;