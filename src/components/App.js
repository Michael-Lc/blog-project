import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import Auth from "../features/authentication";

import Home from '../pages/Home'
import Post from "../pages/Post";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
        </Routes>
        <Auth />
      </AuthProvider>
    </Router>
  )
}

export default App;
