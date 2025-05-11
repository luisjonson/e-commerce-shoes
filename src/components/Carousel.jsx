import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import { Pagination } from 'swiper/modules';

const Carousel = ({ settings, children }) => {
    return (
        <>
            <Swiper {...settings}
                pagination= {settings ?? {clickable:true}}
                modules={[Pagination]}
            
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