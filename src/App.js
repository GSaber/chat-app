import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const currentUser = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser.currentUser) {
      return <Navigate to="/login" replace={true} />;
    } else {
      return children;
    }
  };
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
