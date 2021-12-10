import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequiredAuth(WrapperComponent) {
  const CustomComponent = (props) => {
    const { isAuth } = useSelector((state) => state.auth);

    if (!isAuth) return <Navigate to={"/login"} />;
    return <WrapperComponent {...props} />;
  };

  return CustomComponent;
}

export default RequiredAuth;
