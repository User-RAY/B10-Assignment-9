import { Swiper, SwiperSlide } from 'swiper/react';
import { GiCoffeeMug } from "react-icons/gi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './tips.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const Tips = () => {
    return (
        <div className='tips-container'>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <h1>Tip:1</h1>
                            <h2 className='flex justify-center items-center mb-8'> Bring Your Own Travel Mug <GiCoffeeMug /></h2>
                            <p className='text-center font-medium w-[90%]'>Reduce waste by carrying your own reusable mug or thermos for coffee and beverages</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <h1>Tip:2</h1>
                            <h2 className='flex justify-center items-center mb-8'> Respect Wildlife and Nature<GiCoffeeMug /></h2>
                            <p className='text-center font-normal w-[90%]'>Avoid disturbing wildlife and be mindful of local ecosystems to help preserve natural habitats.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <h1>Tip:3</h1>
                            <h2 className='flex justify-center items-center mb-8'> Bring Your Own Bags <GiCoffeeMug /></h2>
                            <p className='text-center font-medium w-[90%]'>Always carry reusable shopping bags to avoid contributing to plastic pollution when you shop.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <h1>Tip:4</h1>
                            <h2 className='flex justify-center items-center mb-8'> Leave No Trace<GiCoffeeMug /></h2>
                            <p className='text-center font-normal w-[90%]'>Always clean up after yourself and leave your campsite or beach cleaner than you found it.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <h1>Tip:5</h1>
                            <h2 className='flex justify-center items-center mb-8'>Eco-Friendly TravelGear <GiCoffeeMug /></h2>
                            <p className='text-center font-normal w-[90%]'>Invest in sustainable travel gear made from recycled materials and avoid fast fashion products.</p>
                        </div>
                    </SwiperSlide>
            </Swiper>
   
            
        </div>
    );
};

export default Tips;