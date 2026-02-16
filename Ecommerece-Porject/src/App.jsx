import './App.css'
import Header from './Components/layout/Header'
import Home from './Components/pages/Home'
function App() {

  return (
    <>
      <Header />
      <div className="body p-4 bg-gray-100 flex flex-col items-center justify-center">
        <Home />
      </div>
    </>
  )
}

export default App