import React from 'react';

import { AuthProvider } from './AuthContext';
import { PostProvider } from './PostContext';

export default function Providers({ children }) {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          {children}
        </PostProvider> 
      </AuthProvider>
    </>
  );
}
