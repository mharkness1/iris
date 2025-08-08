import React from "react";
import InputColour from "../input/input_main";

type Props = {
  handleSidebar: () => void;
}

const Empty: React.FC<Props> = ({handleSidebar}) => {
 
  return (
    <div className='main-section'>
          <svg width="100%" height="100%" viewBox="0 0 988 962" className='rainbow-box' stroke='currentColor' fill='currentColor'>
            <g transform="matrix(1,0,0,1,-149.014,-1310.86)">
              <g transform="matrix(5.253,0,0,5.253,-3977.93,-767.176)">
                <g transform="matrix(1,0,0,1,330.206,-109.311)">
                  <path d="M455.43,687.811L455.43,504.901L494.199,504.901L494.199,519.452L473.008,519.452L473.008,673.26L494.199,673.26L494.199,687.811L455.43,687.811Z"/>
                </g>
                <g transform="matrix(1,0,0,1,326.122,-48.8511)">
                  <path d="M647.552,627.484L608.782,627.484L608.782,612.934L629.974,612.934L629.974,459.125L608.782,459.125L608.782,444.574L647.552,444.574L647.552,627.484Z"/>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,-96.7222,129.854)">
                <path d="M1063.47,1427.58C766.507,1460.39 530.186,1695.68 495.795,1992.16L408.674,1992.16L408.674,1872.23C479.123,1609.3 688.73,1403.04 953.574,1337.37L1063.47,1337.37L1063.47,1427.58Z"/>
              </g>
              <g transform="matrix(0.827675,0,0,0.827675,98.8309,486.64)">
                <path d="M1048.62,1440.78C770.311,1478.78 549.429,1698.24 509.289,1975.86L377.272,1975.86C419.01,1625.92 698,1348.39 1048.62,1308.88L1048.62,1440.78Z"/>
              </g>
              <g transform="matrix(0.658174,0,0,0.658174,294.129,839.251)">
                <path d="M1021.94,1462.14C774.527,1508.07 578.919,1702.28 530.934,1948.97L363.915,1948.97C415.29,1611.3 683.551,1344.5 1021.94,1295.33L1021.94,1462.14Z"/>
              </g>
              <g transform="matrix(0.481375,0,0,0.481375,494.194,1202.06)">
                <path d="M339.822,1911.09C402.932,1588.07 658.258,1333.48 981.667,1271.47L981.667,1502.29C782.702,1556.16 625.68,1712.52 570.858,1911.09L339.822,1911.09Z"/>
              </g>
            </g>
          </svg>
      <h1>iris</h1>
        <p>This is a colour language generator. The point is not to produce specific palettes of particular colours.</p>
        <p>But instead to specify <i>hyper-parameters</i> that generate the palettes you want from any colour. So... add a colour, any colour...</p> 
        <InputColour handleSidebar={handleSidebar}/>
        <p>Click the info icon above for more details.</p>
    </div>
  )
}

export default Empty;
