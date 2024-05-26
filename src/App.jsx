import React from "react"
import Navbar from "./components/Navbar"
import MainApp from "./components/MainApp"

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainApp darkMode={darkMode} />
    </div>
  )
}
