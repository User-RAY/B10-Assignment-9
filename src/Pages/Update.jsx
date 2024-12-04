import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Update = () => {

    const {updateUserProfile, setUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const updatedData ={displayName: name, photoURL: photo};

        updateUserProfile(updatedData)
        .then(()=>{
            setUser((prevUser)=>{
                // console.log(updatedData);
                return {...prevUser, ...updatedData}
            })
            e.target.reset();
            navigate('/profile')
        }).catch(() => {
            // console.log(error);
            
          });
    }


    return (
        <div className="flex flex-col justify-center items-center">

            <h1 className="text-center text-4xl my-8">Update Your User Profile</h1>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleUpdate}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Updated Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Input Updated Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Updated PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Input Updated PhotoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Update;