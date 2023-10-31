
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const SliderProduct = () => {

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://i.imgur.com/I7rZfMc.jpg" alt="" className='h-96 w-full' /></SwiperSlide>
      <SwiperSlide><img src="https://i.imgur.com/IpGJwTf.jpg" alt="" className='h-96 w-full' /></SwiperSlide>
      <SwiperSlide><img src="https://i.imgur.com/RMgPf8b.jpg" alt="" className='h-96 w-full' /></SwiperSlide>
      
      
    </Swiper>
  );
};




export default SliderProduct;