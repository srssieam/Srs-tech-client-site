import { BallTriangle } from  'react-loader-spinner'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className="w-full h-[80vh] flex items-center justify-center">
            <BallTriangle
                height={150}
                width={150}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
    if (user) {
        return (children)
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivateRoute;