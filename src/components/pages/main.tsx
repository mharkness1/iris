import React from "react";
import EmptySwatch from "./empty";
import ParamSidebar from "../sidebar/param_Sidebar";
import ColourSidebar from "../sidebar/colour_Sidebar";

const MainPage: React.FC = () => {
    return (
        <div className='whole-page'>
          <ParamSidebar />
          <EmptySwatch />
          <ColourSidebar />
        </div>
  )
};

export default MainPage;