import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const sliderData = [
    {
        title: '#Yoshimitsu',
        video: 'https://user-images.githubusercontent.com/82885837/185081717-71d793c6-a486-40a4-910a-81f6dbb7d4ed.MOV',
        url: 'https://www.google.com',
    },
    {
        title: '#Keira Metz',
        video: 'https://user-images.githubusercontent.com/82885837/184858875-9979d5b0-ec90-4ce9-a15c-f50bd9929a32.MOV',
        url: 'https://www.google.com',
    },
    {
        title: '#Yoshimitsu',
        video: 'https://user-images.githubusercontent.com/82885837/185081717-71d793c6-a486-40a4-910a-81f6dbb7d4ed.MOV',
        url: 'https://www.google.com',
    },
    {
        title: '#Keira Metz',
        video: 'https://user-images.githubusercontent.com/82885837/184858875-9979d5b0-ec90-4ce9-a15c-f50bd9929a32.MOV',
        url: 'https://www.google.com',
    },
];

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
        console.log('next');
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
        <div className="slider">
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
                                    className="image video"
                                    src={slide.video}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted
                                ></video>
                                <div className="content">
                                    <h2 className="logo2">{slide.title}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
