import ThemeToggle from '../../utils/themeToggle';
import './header.css'
import { NavLink, Link } from 'react-router-dom';

const PageHeader: React.FC = () => {
    return (
        <div className="header w-full justify-between">
            <NavLink to={"/"} className='h-auto w-auto flex rainbow-box-header gap-2 ml-4'>
                <svg stroke='currentColor' fill='currentColor' width="auto" height="100%" viewBox="0 0 578 489" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                    <g transform="matrix(1,0,0,1,-47.2441,-59.0551)">
                        <g id="Logo">
                            <g transform="matrix(2.39862,0,0,2.39862,-1071.02,-2031.85)">
                                <path d="M503.273,1057.03L540.336,1057.03L540.336,1075.56L466.21,1075.56L466.21,871.712L540.336,871.712L540.336,890.244L503.273,890.244L503.273,1057.03Z" style={{ fillRule: 'nonzero' }}/>
                                <path d="M670.057,1057.03L670.057,890.244L632.994,890.244L632.994,871.712L707.12,871.712L707.12,1075.56L632.994,1075.56L632.994,1057.03L670.057,1057.03Z" style={{ fillRule: 'nonzero' }}/>
                            </g>
                            <path d="M360.53,448.819L360.53,372.773L384.89,372.773L384.89,348.339L409.25,348.339L409.25,323.905L484.252,323.905L484.252,372.773L433.611,372.773L433.611,397.207L409.25,397.207L409.25,448.819L360.53,448.819Z"/>
                            <path d="M165.648,472.133L165.648,281.533L190.008,281.533L190.008,232.664L214.368,232.664L214.368,208.23L238.729,208.23L238.729,183.796L263.089,183.796L263.089,159.362L311.809,159.362L311.809,134.928L506.691,134.928L506.691,183.796L311.809,183.796L311.809,208.23L287.449,208.23L287.449,232.664L263.089,232.664L263.089,257.099L238.729,257.099L238.729,281.533L214.368,281.533L214.368,472.133L165.648,472.133Z"/>
                            <path d="M263.089,460.63L263.089,325.529L287.449,325.529L287.449,301.095L311.809,301.095L311.809,276.661L336.17,276.661L336.17,252.226L360.53,252.226L360.53,227.792L496.063,227.792L496.063,276.661L384.89,276.661L384.89,301.095L360.53,301.095L360.53,325.529L336.17,325.529L336.17,349.963L311.809,349.963L311.809,460.63L263.089,460.63Z"/>
                        </g>
                    </g>
                </svg>
                <svg stroke='currentColor' fill='currentColor' width="auto" height="100%" viewBox="0 0 1027 489" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                    <g transform="matrix(1,0,0,1,-673.99,-59.0551)">
                        <g id="Text" transform="matrix(2.63848,0,0,2.63848,-556.096,-2240.94)">
                            <rect x="466.21" y="871.712" width="37.063" height="185.315" style={{ fillRule: 'nonzero' }}/>
                            <path d="M521.804,871.712L632.994,871.712L632.994,890.244L651.525,890.244L651.525,964.37L632.994,964.37L632.994,982.901L651.525,982.901L651.525,1057.03L614.462,1057.03L614.462,1001.43L558.867,1001.43L558.867,1057.03L521.804,1057.03L521.804,871.712ZM614.462,964.37L614.462,908.775L558.867,908.775L558.867,964.37L614.462,964.37Z" style={{ fillRule: 'nonzero' }}/>
                            <rect x="670.057" y="871.712" width="37.063" height="185.315" style={{ fillRule: 'nonzero' }}/>
                            <path d="M725.651,1001.43L762.714,1001.43L762.714,1019.96L818.309,1019.96L818.309,982.901L744.183,982.901L744.183,964.37L725.651,964.37L725.651,890.244L744.183,890.244L744.183,871.712L836.84,871.712L836.84,890.244L855.372,890.244L855.372,927.307L818.309,927.307L818.309,908.775L762.714,908.775L762.714,945.838L836.84,945.838L836.84,964.37L855.372,964.37L855.372,1038.5L836.84,1038.5L836.84,1057.03L744.183,1057.03L744.183,1038.5L725.651,1038.5L725.651,1001.43Z" style={{ fillRule: 'nonzero' }}/>
                        </g>
                    </g>
                </svg>
            </NavLink>
            <div className='justify-self-end self-center flex'>
                <button className='m-1 p-3 self-center nav-links'>
                    <p><Link to={"/about"}>ABOUT</Link></p>
                </button>
                <button className='m-1 p-3 self-center nav-links'>
                    <p><Link to={"/support"}>SUPPORT</Link></p>
                </button>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default PageHeader;

