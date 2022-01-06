import { CustomThemeProvider } from "./contexts/ThemeContext"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import OnBoarding from "./screens/OnBoarding"
import Login from "./screens/Login"
import Home from "./screens/Home"
import History from "./screens/History"
import { AuthProvider, RequireAuth } from "./contexts/AuthContext"
import Nav from "./components/Nav"
import Register from "./screens/Register"

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<OnBoarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/history"
                element={
                  <RequireAuth>
                    <History />
                  </RequireAuth>
                }
              />
            </Routes>

            <Nav />
          </BrowserRouter>
        </AuthProvider>
      </CustomThemeProvider>
    </div>
  )
}

export default App
