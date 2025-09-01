import React from "react";
import EmptySwatch from "./empty";
import Sidebar from "../sidebar/sidebar";

const MainPage: React.FC = () => {
    return (
        <div className='whole-page'>
          <Sidebar name="<Params/>"/>
          <EmptySwatch />
          <Sidebar name="<Colours/>"/>
        </div>
  )
};

export default MainPage;