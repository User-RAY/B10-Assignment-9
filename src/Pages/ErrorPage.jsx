import { useEffect } from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {

    useEffect(() => {
        document.title = 'ErrorPage | Eco-Wonderland';
      }, []);

    return (
        <div>

            <div className={`bg-[url('https://i.ibb.co.com/7pm3F9z/nature-2592000-1280.jpg')] h-screen bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}>
                <div className="flex flex-col justify-center items-center h-full text-white text-4xl font-bold">
                    <h1>Oops...Looks like somthing went wrong.. Either an error occured or Your Are Lost.</h1>
                    <h1 className="my-8">{"Let's get you back at Home sweet Home"}</h1>
                    <Link  to='/'><button className="btn">Go To HomePage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;