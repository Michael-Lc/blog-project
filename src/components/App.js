import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import Auth from "../features/authentication";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<div>Hello World</div>} />
        </Routes>
        <Auth />
      </AuthProvider>
    </Router>
  )
}

export default App;
