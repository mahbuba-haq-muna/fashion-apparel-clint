import { createUserWithEmailAndPassword,
    getAuth,
     onAuthStateChanged,
      signInWithEmailAndPassword,
       signOut,
       GoogleAuthProvider,
       signInWithPopup
    } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
   const[user, setUser]= useState(null);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) =>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
   }

const googleProvider = new GoogleAuthProvider();

   const googleSignIn = (value)=>{
       return signInWithPopup(auth, googleProvider)
   }

   const signIn = (email, password) =>{
       setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = ()=>{
       setLoading(true)
       return signOut(auth)
   }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           console.log('user on Uth change', currentUser)
           setUser(currentUser);
           setLoading(false)
       });
       return ()=>{
           unsubscribe();
       }
   },[])

const AuthInfo ={
   user,
   loading,
   createUser,
   logOut,
   signIn,
   googleSignIn
}
   
   return (
       <AuthContext.Provider value={AuthInfo}>
           {children}
       </AuthContext.Provider>
   );
};

export default AuthProvider;