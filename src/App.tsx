import './App.css'
import InputColour from './components/colour_input/InputColour'
import RGBTest from './components/colour_input/RGBTest'

function App() {
  return (
    <>
        <div>
          <svg className="logo rainbow-box h-50 w-50 stroke-1 stroke-black fill-black dark:stroke-white dark:fill-white" stroke="currentColor" fill="currentColor" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
            <path d="M23,21a1,1,0,0,1-1-1V15C21.449,1.73,2.546,1.741,2,15v5a1,1,0,0,1-2,0V15C.661-.924,23.345-.911,24,15v5A1,1,0,0,1,23,21Zm-3-1V15C19.6,4.4,4.4,4.407,4,15v5a1,1,0,0,0,2,0V15c.253-7.932,11.75-7.926,12,0v5a1,1,0,0,0,2,0Zm-4,0V15a4,4,0,0,0-8,0v5a1,1,0,0,0,2,0V15a2,2,0,0,1,4,0v5a1,1,0,0,0,2,0Z"/>
          </svg>
        </div>
      <h1>Iris</h1>
        <InputColour />
        <RGBTest />
    </>
  )
}

export default App
