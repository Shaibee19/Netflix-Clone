import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByh3FhmgHD9TMDX8F140Jka0dXJfo82pA",
  authDomain: "netflix-clone-5ff37.firebaseapp.com",
  projectId: "netflix-clone-5ff37",
  storageBucket: "netflix-clone-5ff37.firebasestorage.app",
  messagingSenderId: "1001173650817",
  appId: "1:1001173650817:web:b460d9d12aa40599006c80"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = async ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};