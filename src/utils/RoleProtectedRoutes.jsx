import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function RoleProtectedWrapper({ children ,allowedRoles }) {
  const role = JSON.parse(localStorage.getItem("role"));

   
 if(allowedRoles.includes(role)){
    return(
        <div> {children}</div>
    )
 }
 else{
    return <Navigate to='/unAuthorized' replace  />
 }


}

export default RoleProtectedWrapper;