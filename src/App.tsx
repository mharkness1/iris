import './App.css'
import { ColourProvider } from './context/colourProvider';
import PageHeader from './components/header/header';
import MainPage from './components/pages/palettes/main';


function App() {
 
  return (
    <ColourProvider>
      <>
        <PageHeader />
        <MainPage />
      </>
    </ColourProvider>
  )
}

export default App
