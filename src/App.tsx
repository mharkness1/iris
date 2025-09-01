import './App.css'
import { ColourProvider } from './context/colourContext';
import PageHeader from './components/header/header';
import MainPage from './components/pages/main';


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
