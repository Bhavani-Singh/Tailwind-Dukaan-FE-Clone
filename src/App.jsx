import './App.css'
import LeftSideBar from './assets/components/LeftSideBar'
import MainContent from './assets/components/MainContent'

function App() {

  return (
    <div className="flex relative">
      <LeftSideBar className="bg-[#1E2640] h-[100dvh] text-[#D2D4D9] flex flex-col justify-between max-w-[240px] sticky top-0 left-0"/>
      <MainContent className="w-full relative top-0 bg-[#FAFAFA]"/>
    </div>
  )
}

export default App
