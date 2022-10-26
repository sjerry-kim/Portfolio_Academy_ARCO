import Login from "../page/Login";
import { Link } from "react-router-dom";

const LoginIconComp = () => {
  return (
    <div>
      <Link to='/login' element={<Login />}>Sign In</Link>
      
    </div>
  );
}

export default LoginIconComp;