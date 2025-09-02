import React, { useContext } from "react";
import EmptySwatch from "./empty";
import ParamSidebar from "../sidebar/param_Sidebar";
import ColourSidebar from "../sidebar/colour_Sidebar";
import { ColourContext } from "../../context/colourContext";
import Populated from "./populated";

const MainPage: React.FC = () => {
  const colourContext = useContext(ColourContext)
  const primaryColour = colourContext?.primaryColour
  
  return (
        <div className='whole-page'>
          <ParamSidebar />
            {primaryColour ?
            <EmptySwatch /> : 
            <Populated />
            }
          <ColourSidebar />
        </div>
  )
};

export default MainPage;