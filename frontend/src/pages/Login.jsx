import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const userCredential =
        await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      // 🔥 관리자 / 일반 사용자 분기
      if (user.email === "admin@waterbridge.com") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input id="email" />
      <input id="password" type="password" />

      <button onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}