import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper/modules';

const Carousel = ({ settings, children }) => {
    return (
        <>
            <Swiper {...settings}
                pagination= {settings ?? {clickable:true}}
                modules={[Navigation, Pagination, A11y]}
            
            >
                {React.Children.map(children,(child, index) =>(
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel