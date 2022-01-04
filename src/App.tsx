import { CustomThemeProvider } from "./contexts/ThemeContext"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import OnBoarding from "./screens/OnBoarding"
import Login from "./screens/Login"
import Home from "./screens/Home"
import History from "./screens/History"
import { AuthProvider, RequireAuth } from "./contexts/AuthContext"

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<OnBoarding />} />
              <Route path="/login" element={<Login />} />
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
          </BrowserRouter>
        </AuthProvider>
      </CustomThemeProvider>
    </div>
  )
}

export default App
