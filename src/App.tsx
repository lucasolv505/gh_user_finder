import { Outlet } from "react-router-dom"

import "./AppStyle.css"

function App() {

  return (
    <div className="app">
      <h1>GITHUB FINDER</h1>
      <Outlet/>
    </div>
  )
}

export default App
