import { useContext, useState } from 'react'
import './App.css'
import { ColourContext, ColourProvider } from './context/colourContext';
import Empty from './components/pages/empty';
import Populated from './components/pages/populated';
import PageHeader from './components/header/header';
import type { Colour } from 'iris-colour';
import Info from './components/pages/info';
import Sidebar from './components/swatch/swatch';

// Prop drill the sidebar status, wrap everything in colour context.

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(colours)
  };
  
  const [isInfoOpen, setInfoOpen] = useState(false);
  const handleInfo = () => {
    setInfoOpen(!isInfoOpen);
  }

  const colourContext = useContext(ColourContext);
  const colours = colourContext?.colours;
  const [primaryColour, setPrimaryColour] = useState<Colour | undefined>(undefined);

  return (
    <ColourProvider>
      <>
       <PageHeader isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} isInfoOpen={isInfoOpen} handleInfo={handleInfo}/>
        <div className='whole-page'>
          {isSidebarOpen && <Sidebar />}
          { !colours && !isInfoOpen ?
          <Empty /> :
          <Populated />
          }
          { isInfoOpen && <Info />}
        </div>
      </>
    </ColourProvider>
  )
}

export default App
