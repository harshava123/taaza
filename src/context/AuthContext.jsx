import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { type: 'customer' | 'admin', ... }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        if (firebaseUser.email === 'admin@tazza.com') {
          setUser({ type: 'admin', email: firebaseUser.email });
        } else {
          // Fetch customer profile from Firestore
          try {
            const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
            if (userDoc.exists()) {
              setUser({ ...userDoc.data(), type: 'customer' });
            } else {
              // Fallback if not found
              setUser({ type: 'customer', email: firebaseUser.email, uid: firebaseUser.uid });
            }
          } catch (err) {
            setUser({ type: 'customer', email: firebaseUser.email, uid: firebaseUser.uid });
          }
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, setUser, loading };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
} 