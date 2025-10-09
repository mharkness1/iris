import React from "react";
import InputColour from "../../input/input_main";
import '../../../App.css'

const EmptySwatch: React.FC = () => {
 
  return (
    <div className='main-section justify-center items-center text-center gap-5 lg:pl-12 lg:pr-12 px-5'>
        <p>This is a <b>colour language</b> generator. The point is not to produce specific palettes of particular colours.</p>
        <p>But instead to specify <i>hyper-parameters</i> that generate the palettes you want from any colour. So... add a colour, any colour...</p> 
        <InputColour />
        <p>Then select your colour to see the sort of palettes generated or click about for more details.</p>
    </div>
  )
}

export default EmptySwatch;
