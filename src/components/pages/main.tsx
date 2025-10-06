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
          <div className="order-2 md:hidden lg:block lg:order-1 lg:self-start">
            <ParamSidebar />
          </div>
          <div className={`order-1 lg:order-2 shrink grow main-section ${!primaryColour ? "" : 'self-start'}`}>
            {!primaryColour ? <EmptySwatch /> : <Populated /> }
          </div>
          <div className="order-3 md:hidden lg:order-3 lg:block lg:self-start">
            <ColourSidebar />
          </div>
          <div className="order-4 hidden md:flex lg:hidden flex-ro items-start">
            <ColourSidebar />
            <ParamSidebar />
          </div>
        </div>
  )
};

export default MainPage;