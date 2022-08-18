import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { sliderData } from '../../lib/sliderData'
import { SliderContainer, SlideTitle } from '../../styles/HomePageStyles';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 10000;

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        );
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <SliderContainer>
            {sliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? 'slide current' : 'slide'
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <div>
                                <video
                                    className="video"
                                    src={slide.video}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted
                                ></video>
                                <div className="content">
                                    <SlideTitle>{slide.title}</SlideTitle>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </SliderContainer>
    );
};

export default Slider;
