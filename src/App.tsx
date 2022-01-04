import { CustomThemeProvider } from "./contexts/ThemeContext"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import OnBoarding from "./screens/OnBoarding"
import Login from "./screens/Login"
import Home from "./screens/Home"
import History from "./screens/History"

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnBoarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </div>
  )
}

export default App
