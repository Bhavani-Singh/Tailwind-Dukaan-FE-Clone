import './App.css'
import RightSideBar from './assets/components/LeftSideBar'
import MainContent from './assets/components/MainContent'

function App() {

  return (
    <div className="grid grid-cols-8">
      <RightSideBar className="bg-[#1E2640] h-[100dvh] text-[#D2D4D9] flex flex-col justify-between"/>
      <MainContent className="col-span-7 h-[100dvh]"/>
    </div>
  )
}

export default App
