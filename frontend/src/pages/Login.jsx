import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Login() {

  const navigate = useNavigate();

  const login = async () => {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const userCredential =
      await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    if (user.email === "admin@waterbridge.com") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <input id="loginEmail" />
      <input id="loginPassword" type="password" />

      <button onClick={login}>로그인</button>

      <button onClick={() => navigate("/signup")}>
        회원가입
      </button>
    </div>
  );
}