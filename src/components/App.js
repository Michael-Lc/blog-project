import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import Providers from "../contexts";

import Home from '../pages/Home'
import Post from "../pages/Post";
import User from "../pages/User";
import SignUp from '../pages/SignUp'
import AddPost from "../pages/AddPost";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Router>
      <Providers>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:user/:postTitle" element={<Post />} />
          <Route exact path="/user/:user" element={<User />} />
          
          <Route exact path="/signup" element={<SignUp />} />
          {/* <Route exact path="/signin" element={<SignIn />} /> */}

          <Route exact path="/addpost" element={<AddPost />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Providers>
    </Router>
  )
}

export default App;
