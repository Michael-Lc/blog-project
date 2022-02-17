import React, { createContext, useContext, useState } from "react";
import faker from '@faker-js/faker';

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const user = faker.helpers.userCard()
user.image = faker.internet.avatar()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(user)

  const value = {
    currentUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
