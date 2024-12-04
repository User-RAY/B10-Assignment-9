import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

// eslint-disable-next-line react/prop-types
const ConditionalRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading></Loading>
    }
    

    if(user){
        return <Navigate to={location?.state ? location.state : '/'}></Navigate>
    }

    return (
        children
    );
};

export default ConditionalRoute;