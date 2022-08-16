import { useEffect, useState } from 'react';
import {
    HeroContainer,
    HeroWrapper,
    HeroContentWrapper,
    HeroContent,
    LeftArrow,
    RightArrow,
} from '../../styles/HomePageStyles';
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi'
import Slide from './Slide';

const Hero = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length);
    }, [children]);

    
    const next = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        } else {
          setCurrentIndex(0)
        }

    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        } 
    };


    return (
        <HeroContainer>
            <HeroWrapper>
                <LeftArrow onClick={prev}><HiChevronLeft /></LeftArrow>
                <HeroContentWrapper>
                    <HeroContent currentIndex={currentIndex}>
                        {children}
                    </HeroContent>
                </HeroContentWrapper>
                <RightArrow onClick={next}><HiChevronRight /></RightArrow>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default Hero;
