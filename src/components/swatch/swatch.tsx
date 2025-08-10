import { ColourContext } from "../../context/colourContext";
import AddColourSidebar from "./add_colour_sidebar";
import ColourBlock from "./colour_block/colour_block";
import "./sidebar.css"
import { useContext } from "react";

type Props = {
    handleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({handleSidebar}) => {
    const colourContext = useContext(ColourContext)
    const colours = colourContext?.colours

    return (
            <>
            <div className="sidebar h-full">
                <div className="px-4 py-2">
                <div className="text-xl text-center">
                    <b>Colours</b>
                    {
                        colours?.map(colour =>
                            <ColourBlock key={colour.name} colour={colour} handleSidebar={handleSidebar}/>
                        )
                    }
                    <AddColourSidebar />
                </div>
                </div>
            </div>
            </>
    );
}

export default Sidebar;