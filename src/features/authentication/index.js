import React from 'react';
import { Route, Routes } from "react-router-dom";

import Signup from "./Signup";

function Auth() {
  return (
    <Routes>
        <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Auth;
