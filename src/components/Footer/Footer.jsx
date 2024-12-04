import { GiTreeBranch } from "react-icons/gi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="mt-24">

            <footer id="footer" className="bg-[#131313] text-white py-16">
                    <div className="mt-8 w-11/12 lg:w-10/12	mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


                        <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                            <div className="flex justify-start items-center">
                                <GiTreeBranch className="text-3xl mr-2" />
                                <a className="text-3xl font-black">Eco-Wonderland</a>
                            </div>

                            <div className="text-[#FFFFFF]/[.9] my-4">
                                <p>Location: av. Washington 165, NY CA 54003</p>
                                <p className="my-2">Phone: +31 85 964 47 25</p>
                                <p>Email: info@yourdomain.com</p>
                                <p className="my-2">Openings hours:  10:00 AM - 8:00 PM </p>
                            </div>

                            <div id="socials" className="w-1/2 flex justify-between items-center">


                            <a href="https://www.facebook.com/">
                                <FaFacebook className="text-3xl text-blue-500"/>
                            </a>


                            <a href="https://x.com/"><FaXTwitter className="text-3xl"/>
                            </a>


                            <a href="https://www.youtube.com/">
                                <FaYoutube className="text-4xl text-red-500"/>
                            </a>
                                

                            <a href="https://www.instagram.com/">
                                <SiInstagram className="text-3xl text-pink-500" />
                            </a>

                            </div>
                        </div>


                        <div className="flex justify-start items-center flex-col text-left my-12 lg:my-0">
                        <div>
                            <h3 className="font-bold text-xl mb-8">Useful Links</h3>
                            <ul className="text-base text-white/[.6] lg:justify-items-start  text-center lg:text-left">
                            <li><a href="#">Home</a></li>
                            <li className="my-2"><a href="#">About Us</a></li>
                            <li><a href="#">Adventure</a></li>
                            <li className="my-2"> <a href="#">Foundation</a></li>
                            <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        </div>


                        <div className="flex justify-center lg:justify-end items-start sm:col-span-2 lg:col-span-1	">
                            <div className="w-full max-w-xs text-center lg:text-left">
                            <h3 className="font-bold">Drop a Message</h3>
                            <form>
                                <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs bg-[#FFFFFF]/[.05] my-4" required />
                                <input type="submit" value="Subscribe" className="btn w-full max-w-xs bg-blue-600 text-white border-none"/>
                            </form>
                            </div>

                        </div>


                    </div>
            </footer>
            
        </div>
    );
};

export default Footer;