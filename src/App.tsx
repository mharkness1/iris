import { useState } from 'react'
import './App.css'
import { ColourProvider } from './context/colourContext';
import PageHeader from './components/header/header';
import MainPage from './components/pages/manager';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = (a?: boolean) => {
    if (a !== undefined) {
      setSidebarOpen(a)
    }
    setSidebarOpen(!isSidebarOpen);
    console.log('sidebar handler')
  };
  
  return (
    <ColourProvider>
      <>
        <PageHeader isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />
        <MainPage isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />
      </>
    </ColourProvider>
  )
}

export default App
