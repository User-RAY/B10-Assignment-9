import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MailContext } from "../providers/MailProvider";


const ForgetPassword = () => {

    const {reset} = useContext(AuthContext);

    const [mail] = useContext(MailContext);
    // console.log(mail);
    
    const navigate = useNavigate();

    const handleForgetPassword = (e) => {
        e.preventDefault();

        const email = e.target.email.value;

        reset(email)
        .then(() => {
            // console.log('reset mail sent');
            navigate('/auth/login');
            window.open('https://mail.google.com/', '_blank');
          })
          .catch(() => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            
          });

    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">

                <h1 className="text-center text-4xl my-8">Forgot Password?</h1>

                <p className="mb-8">Enter the email address you used when you joined and we will send you instructions to reset your password.</p>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleForgetPassword}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Input Current Email" defaultValue={mail} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send Reset Instructions</button>
                        </div>
                    </form>
                </div>

            </div>

            
        </div>
    );
};

export default ForgetPassword;