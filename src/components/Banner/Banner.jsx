
import { Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const Banner = () => {
    return (
        <div>

            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/7pm3F9z/nature-2592000-1280.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex justify-center items-center max-h-[40rem] min-h-[40rem] text-5xl text-white w-3/4 mx-auto text-center'>Welcome to most Eco friendly magical paradise.</div></div></SwiperSlide>
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/hZCysMt/photo-1682686580849-3e7f67df4015.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex justify-center items-center max-h-[40rem] min-h-[40rem] text-5xl text-white w-3/4 mx-auto text-center'>Explore the vibrant underwater world with experienced instructors.</div></div></SwiperSlide>
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/5cyRdxv/mountaineers-5649828-1280.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex justify-center items-center max-h-[40rem] min-h-[40rem] text-5xl text-white w-3/4 mx-auto text-center'>Experience breathtaking mountain views and challenging hikes.</div></div></SwiperSlide>
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/Pt3wGqr/image.png')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex justify-center items-center max-h-[40rem] min-h-[40rem] text-5xl text-white w-3/4 mx-auto text-center'>Enjoy thrilling river rides and peaceful canoe trips.</div></div></SwiperSlide>
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/tscDMYD/image.png')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex justify-center items-center max-h-[40rem] min-h-[40rem] text-5xl text-white w-3/4 mx-auto text-center'>Unplug and unwind with a serene camping experience in nature.</div></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;