import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import Providers from "../contexts";

import Home from '../pages/Home'
import Post from "../pages/Post";
import User from "../pages/User";
import SignUp from '../pages/SignUp'
import AddPost from "../pages/AddPost";
import NavBar from './navbar'

function App() {
  return (
    <Router>
      <Providers>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:user/:postTitle" element={<Post />} />
          <Route exact path="/:user" element={<User />} />
          
          <Route exact path="/signup" element={<SignUp />} />

          <Route exact path="/addpost" element={<AddPost />} />
        </Routes>
      </Providers>
    </Router>
  )
}

export default App;
