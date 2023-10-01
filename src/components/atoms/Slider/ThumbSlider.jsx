import React, { useRef  } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './ThumbSlider.scss';
import kitchen from "../../../assets/img/kitchen-g48679c8a0_1280.png";
import room from "../../../assets/img/room.png";
import phone from "../../../assets/img/phone.png";
import calendar from "../../../assets/img/calendar.png";

const ThumbSlider = () => {
    const splideRef = useRef(null);
    const splideThumbnailsRef = useRef(null);

    const slideData = [
        { img: kitchen, alt:'kitchen' },
        { img: room, alt: 'kitchen' },
        { img: phone, alt: 'kitchen' },
        { img: calendar, alt: 'kitchen' },
    ];

    const mainOptions = {
        type      : 'loop',
        perPage   : 1,
        perMove   : 1,
        cover     : true,
        height    : '25em',
        focus     : 'center',
    };
      
      const thumbsOptions = {
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

    const handleClick= (number) => {
        splideThumbnailsRef.current?.go(number);
    }

    const handleThumbnailClick = (number) => {
        splideRef.current?.go(number);
    }

    return (
        <div className="slider">
            <div className="main_slide">
                <Splide ref={splideRef} options={ mainOptions } aria-label="Main" onMove={ (splide, prev, next) => handleClick(prev)} >
                    {slideData.map((list, index) => (
                        <SplideSlide key={index}>
                            <img src={list.img} alt={list.alt} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <Splide ref={splideThumbnailsRef} options={ thumbsOptions } aria-label="Thumbnails" onMove={(splide, prev, next) => handleThumbnailClick(prev)} >
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
