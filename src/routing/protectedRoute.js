import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignIn from "pages/sign-in/signin";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    return <SignIn />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
