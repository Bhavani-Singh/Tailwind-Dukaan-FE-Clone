import './App.css'
import RightSideBar from './assets/components/LeftSideBar'
import MainContent from './assets/components/MainContent'

function App() {

  return (
    <div className="flex">
      <RightSideBar className="fixed sticky top-0 left-0 bg-[#1E2640] h-[100dvh] text-[#D2D4D9] flex flex-col justify-between max-w-[240px]"/>
      <MainContent className="w-full h-[100dvh] bg-[#FAFAFA]"/>
    </div>
  )
}

export default App
