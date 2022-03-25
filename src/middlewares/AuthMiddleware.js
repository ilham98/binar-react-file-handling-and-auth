import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthMiddleware(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
  }, []);

  return <div>{props.children}</div>;
}

export default AuthMiddleware;
