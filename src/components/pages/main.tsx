import React from "react";
import EmptySwatch from "./empty";
import ParamSidebar from "../sidebar/param_Sidebar";
import ColourSidebar from "../sidebar/colour_Sidebar";
import ParamToggleButton from "../sidebar/param_Toggle";

const MainPage: React.FC = () => {
    return (
        <div className='whole-page'>
          <ParamSidebar />
          <ParamToggleButton />
          <EmptySwatch />
          <ColourSidebar />
        </div>
  )
};

export default MainPage;