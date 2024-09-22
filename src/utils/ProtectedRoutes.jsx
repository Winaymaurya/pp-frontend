import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function LoginProtectedWrapper({ children }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const location = useLocation();

  return token ? (
    <div>
        {children}
    </div>  
  ) : (
    
    <Navigate to="/" replace state={{ path: location.pathname }} />
  )
}

export default LoginProtectedWrapper;
