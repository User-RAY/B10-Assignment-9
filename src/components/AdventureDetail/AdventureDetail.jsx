import EcoFeatures from "../EcoFeatures/EcoFeatures";
import { GiSandsOfTime } from "react-icons/gi";
import moment from 'moment';
import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const AdventureDetail = ({data}) => {

    // eslint-disable-next-line react/prop-types
    const {title, image, category,cost, availability, location, duration, level, includedItems, maxGroupSize, specialInstructions, ecoFriendlyFeatures, description} = data;


    const [meet, setMeet ] = useState(null);
    
    const d = new Date();
    let hour = d.getHours();
    
    useEffect(()=>{
        if (hour >= 10 && hour < 20) {
            setMeet(true);
        } else{
            setMeet(false)
        }
    },[hour])


    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="max-h-[30rem]">
                    <img
                    src={image}
                    alt="Shoes"
                    className="object-contain w-full h-full" />
                </figure>
                <div className="card-body justify-center items-center">
                    <h2 className="card-title text-4xl">{title}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 my-8">

                        <div className="flex flex-col justify-end items-center border-b-2 md:border-b-0 md:border-r-2 border-black ">

                            <p className="font-bold mb-4 text-center text-xl w-11/12">{description}</p>
                            <div>
                               <span className="font-bold"> Activity and level type:</span> 
                                <div className="badge  badge-info mx-2">{category}</div>
                                <div className="badge  badge-info mx-2">{level}</div>
                            </div>
                            <h2 className="my-4"> <span className="font-bold">Adventure Location:</span> {location}</h2>
                            
                            <div className="flex justify-center items-center">
                                <GiSandsOfTime className="text-orange-400" /><h2> <span className="font-bold">Total duration:</span> {duration}</h2>
                            </div>



                            <h2 className="my-4"> <span className="font-bold">MAX Group</span>: {maxGroupSize}</h2>
                            
                        </div>


                        <div className="flex justify-center items-center">

                            <div className="grid md:grid-cols-3 gap-12">
                                <div>
                                    <h2 className="font-bold text-lg">Services Provide:</h2> <EcoFeatures ecoFriendlyFeatures={includedItems} icon={"fa-solid fa-check"}></EcoFeatures>
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg">Eco Friendly Features: </h2> <EcoFeatures ecoFriendlyFeatures={ecoFriendlyFeatures} icon={"fa-solid fa-leaf"}></EcoFeatures>
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg">Special Instruction:</h2> <EcoFeatures ecoFriendlyFeatures={specialInstructions} icon={'fa-solid fa-square-check'}></EcoFeatures>
                                </div>
                            </div>

                        </div>

                    </div>


                    <h2 className="text-xl"><span className="font-bold">Total cost:</span> {cost}</h2>
                    <h2 className="font-bold text-xl text-green-600">{availability}</h2>
                    
                    <div className="card-actions justify-end">
                        {
                            meet ? <a href="https://meet.google.com/" target="_blank"><button className="btn btn-primary">Talk with Expert</button></a> : <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Talk with Expert</button>
                        }

                    </div>
                    <p> <span className="font-semibold">Current time:</span> {moment().format(' h:mm:ss a')}</p>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Consultation Time</h3>
                    <p className="py-4"> 
                        Our consultation hours are from <strong>10:00 AM to 8:00 PM</strong>.
                    </p>
                    <p className="py-4"> 
                        Please feel free to schedule a meeting during these hours, and we will be happy to assist you.
                    </p>

  
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default AdventureDetail;