import { useContext, useState } from 'react'
import './App.css'
import { ColourContext, ColourProvider } from './context/colourContext';
import Empty from './components/pages/empty';
import Populated from './components/pages/populated';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const colourContext = useContext(ColourContext);
  const colours = colourContext?.colours;

  return (
    <ColourProvider>
      { colours ?
      <Empty isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar}/> :
      <Populated isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar}/>
      }
    </ColourProvider>
  )
}

export default App
