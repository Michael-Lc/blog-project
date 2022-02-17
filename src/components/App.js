import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

// import { AuthProvider } from "../contexts/AuthContext";
// import { PostProvider } from "../contexts/PostContext";
import Providers from "../contexts";
import Auth from "../features/authentication";

import Home from '../pages/Home'
import Post from "../pages/Post";
import User from "../pages/User";

function App() {
  return (
    <Router>
      <Providers>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:user/:postTitle" element={<Post />} />
            <Route exact path="/:user" element={<User />} />
          </Routes>

        <Auth />
      </Providers>
      {/* <AuthProvider>
        <PostProvider>
        </PostProvider>
      </AuthProvider> */}
    </Router>
  )
}

export default App;
