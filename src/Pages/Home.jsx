import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Tips from "../components/Tips/Tips";
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from "react";

const Home = () => {

    const catData = useLoaderData();

    // const {loading,user} = useContext(AuthContext);
    // console.log(loading, user);

    useEffect(() => {
        AOS.init({
          duration: 1500, 
          easing: 'ease',   
        });
      
        return () => {
          AOS.refresh();
        };
      }, []);
    
    return (
        <div>
            <Banner></Banner>

            <div className="mt-4 w-5/6 mx-auto">
                <Categories catData={catData}></Categories>
            </div>

            <div className="w-5/6 mx-auto my-32 flex flex-col justify-center items-center" data-aos="flip-left">
                <h1 className="text-center text-4xl font-bold mb-8">Our Destination Covarage Around The World</h1>

                <img src="https://i.ibb.co.com/tmP0d5H/image.png" alt=""  className="rounded-2xl"/>

            </div>

            <div className="my-16 w-5/6 mx-auto" data-aos="zoom-in">
                <h1 className="text-center mb-8 text-4xl font-bold">Sustainability Tips</h1>

                <Tips></Tips>

            </div>

            <div className="w-5/6 mx-auto my-32" data-aos="fade-up">
                    <h2 className="text-center text-4xl font-bold mb-8">Frequently Asked Questions(FAQ)</h2>
                        <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is an eco-adventure?</div>
                        <div className="collapse-content">
                            <p>An eco-adventure is a travel experience focused on exploring natural environments in a sustainable way. These adventures minimize environmental impact and emphasize conservation and local community support.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How are these adventures eco-friendly?</div>
                        <div className="collapse-content">
                            <p>Our adventures use eco-friendly practices such as avoiding single-use plastics, supporting renewable energy in accommodations, and promoting conservation efforts. We also collaborate with local communities to create sustainable tourism experiences.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Do you support local communities through these adventures?</div>
                            <div className="collapse-content">
                                <p>Yes, we work closely with local communities by employing local guides, sourcing supplies from local businesses, and contributing a portion of our proceeds to community development and conservation projects.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">What should I pack for an adventure?</div>
                            <div className="collapse-content">
                                <p>Packing requirements depend on the adventure. Generally, you should bring comfortable clothing, sturdy footwear, a reusable water bottle, sunscreen, a first-aid kit, and any specific gear mentioned in your adventure details.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How do I create an account or log in?</div>
                            <div className="collapse-content">
                                <p>You can create an account by visiting the registration page, entering your details (Name, Email, Photo URL, Password), and clicking “Register.” To log in, use the login page with your registered email and password.</p>
                            </div>
                        </div>

            </div>

        </div>
    );
};

export default Home;