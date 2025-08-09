import { useState } from 'react'
import './App.css'
import { ColourProvider } from './context/colourContext';
import PageHeader from './components/header/header';
import MainPage from './components/pages/manager';


// Prop drill the sidebar status, wrap everything in colour context.

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  const [isInfoOpen, setInfoOpen] = useState(false);
  const handleInfo = () => {
    setInfoOpen(!isInfoOpen);
  }

  return (
    <ColourProvider>
      <>
        <PageHeader isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} isInfoOpen={isInfoOpen} handleInfo={handleInfo}/>
        <MainPage isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} isInfoOpen={isInfoOpen}/>
      </>
    </ColourProvider>
  )
}

export default App
