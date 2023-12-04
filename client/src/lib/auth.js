import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { errorReceiver } from "../utils/errorHandler";
import { useNavigate } from "react-router-dom";

const auth = getAuth();
const navigate = useNavigate()


export const registerSubmitHandler = (values) => {
  if (values.password !== values.rePassword){
    setError('Passwords don\'t match!')
  }
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      setAuthInfo(user)
      errorReceiver(null)
      navigate('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorReceiver(errorMessage)
      // ..
    });
};
export const loginSubmitHandler = (values) => {
  signInWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthInfo(user)
    errorReceiver(null)
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    errorReceiver(errorMessage)
  });
};