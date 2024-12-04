import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {

    const {user, loading} = useContext(AuthContext);

    // console.log(user);
    

    return (
        <div>

            <h1 className="text-center text-4xl my-8 font-bold">Welcome to your profile, <span className="text-blue-600">{user?.displayName}</span> </h1>

            <div className="card bg-base-100 md:w-1/2 shadow-xl mx-auto">
                <figure>
                    {loading ? <span className="loading loading-infinity loading-lg"></span> : <img
                    src={user ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt="profile photo" className="object-contain w-full h-96"/>}
                </figure>
                <div className="card-body justify-center items-center">
                    <h2 className="card-title font-bold">Name: <span className="text-blue-500 font-medium">{user?.displayName}</span></h2>
                    <p className="my-4 font-extrabold text-lg">Email: <span className="text-blue-500 font-medium">{user?.email}</span> </p>
                    <div className="card-actions justify-center">
                    <Link to='/update'><button className="btn btn-primary">Update Profile</button></Link>
                    </div>
                </div>
            </div>
                        
        </div>
    );
};

export default Profile;