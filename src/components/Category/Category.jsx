import { Link } from "react-router-dom";
import EcoFeatures from "../EcoFeatures/EcoFeatures";
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Category = ({data}) => {

    // eslint-disable-next-line react/prop-types
    const {id,title, image, ecoFriendlyFeatures} = data;

    // eslint-disable-next-line react/prop-types
    const trimTitle =  title.replace(/\s+/g, "");

    window.scrollTo(0, 10);

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
            <div className="my-24" data-aos={`${id%2 === 0 ? 'fade-left' : 'fade-right'}`}>
            
                <div className={`card shadow-xl ${(id%2 == 0) ? "lg:flex-row-reverse" : "lg:flex-row" } lg:max-h-[30rem] lg:min-h-[30rem]`}>
                    <figure className="lg:w-1/2">
                        <img
                        src={image}
                        alt="Album"
                        className="w-full object-cover h-full"
                         />
                    </figure>
                    <div className="flex justify-center lg:w-1/2">
                        <div className="flex flex-col justify-center gap-8 w-4/6 ">
                            <h2 className="card-title text-4xl">{title}</h2>
                            <span className="font-bold">Eco Friendly Features:</span> <EcoFeatures ecoFriendlyFeatures={ecoFriendlyFeatures} list={'list-disc'}></EcoFeatures>
                            <div className="card-actions justify-start">
                            <Link to={`/Details/${trimTitle}`}><button className="btn btn-primary my-8">ExploreNow</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;