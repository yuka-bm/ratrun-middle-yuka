import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';
import './ThumbSlider.scss';
import kitchen from "../../../assets/img/kitchen-g48679c8a0_1280.png";
import room from "../../../assets/img/room.png";
import phone from "../../../assets/img/phone.png";
import calendar from "../../../assets/img/calendar.png";

const ThumbSlider = () => {
    const slideData = [
        { img: kitchen, alt:'kitchen' },
        { img: room, alt: 'kitchen' },
        { img: phone, alt: 'kitchen' },
        { img: calendar, alt: 'kitchen' },
    ];

    const mainOptions: Options = {
        type      : 'loop',
        perPage   : 1,
        perMove   : 1,
        cover     : true,
        height    : '25em',
        focus     : 'center',
    };
      
      const thumbsOptions: Options = {
        type        : 'slide',
        rewind      : true,
        pagination  : false,
        fixedWidth  : 210,
        fixedHeight : 140,
        gap         : '1rem',
        cover       : true,
        focus       : 'center',
        isNavigation: true,
    };

    return (
        <div className="slider">
            <div className="main_slide">
                <Splide options={ mainOptions } aria-label="Main">
                    {slideData.map((list, index) => (
                        <SplideSlide key={index}>
                            <img src={list.img} alt={list.alt} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <Splide options={ thumbsOptions } aria-label="Thumbnails">
                {slideData.map((list, index) => (
                    <SplideSlide key={index}>
                        <img src={list.img} alt={list.alt} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ThumbSlider;
