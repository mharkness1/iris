import './header.css'
import { useContext } from 'react';
import { ColourContext } from '../../context/colourContext';

type Props = {
    isSidebarOpen: boolean,
    handleSidebar: () => void;
    isInfoOpen: boolean;
    handleInfo: () => void;
}

const PageHeader: React.FC<Props> = ({ isSidebarOpen, handleSidebar, isInfoOpen, handleInfo }) => {
    const colourContext = useContext(ColourContext);
    const colours = colourContext?.colours;

    const renderPostInput: boolean = (colours !== undefined && colours.length > 0 && !isInfoOpen)

    const combinedInfoHandler = () => {
        handleInfo();
        if (isSidebarOpen) {
        handleSidebar();
        }
        console.log('handled')
    }

    return (
        <div className="header">
            { renderPostInput  && 
            <button className='m-4' onClick={handleSidebar}>
                {isSidebarOpen && !isInfoOpen ? 
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                </svg>
                :
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="1" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"/>
                </svg>
                }
            </button> }
            <div className='w-full h-full flex items-center justify-center'>
            { renderPostInput && <>
            <svg viewBox="0 0 988 962" className='rainbow-box-header' stroke='currentColor' fill='currentColor'>
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
            <h1 className='m-3 self-center'>iris</h1>
            </>
            }
            </div>
            <button className='m-4 justify-end' onClick={combinedInfoHandler}>
            {isInfoOpen ?
            <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/>
            </svg>
            :
            <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            }
            </button>

        </div>
    )
}

export default PageHeader;
