import React, { useState, useEffect } from 'react';
import vegetablesImg from '../assets/vegetables.png';
import furnitureImg from '../assets/furniture.png';
import beautyImg from '../assets/beauty.png';

const HeroSection = () => {

    const slides = [
        {
            title: <>Everything You Need, <br /> All In One Place</>,
            description: "Shop fresh groceries, daily essentials, household items, and much more at the best prices. High-quality products delivered straight to your doorstep.",
            image: furnitureImg,
            bgColor: "bg-amber-500",
            btnColor: "bg-orange-600 hover:bg-orange-700",
            btnTxtColor: "text-white"
        },
        {
            title: <>Fresh & Organic <br /> Veggies Market</>,
            description: "Organic food is food produced by methods that comply with the standards of farming. Get farm-fresh vegetables directly delivered to your home.",
            image: vegetablesImg,
            bgColor: "bg-emerald-600",
            btnColor: "bg-emerald-800 hover:bg-emerald-900",
            btnTxtColor: "text-white"
        },
        {
            title: <>Best Deals & <br /> Mega Discounts</>,
            description: "Save big on your weekly shopping! Explore unbelievable offers on all household and supermarket essentials.",
            image: beautyImg,
            bgColor: "bg-orange-500",
            btnColor: "bg-white hover:bg-gray-100",
            btnTxtColor: "text-gray-900"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const currentSlide = slides[currentIndex];

    return (
        <section className={`w-full ${currentSlide.bgColor} text-white px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 h-155 md:h-130 relative transition-colors duration-500`}>

            {/* TEXT CONTAINER */}
            <div className='max-w-xl space-y-4 md:space-y-6 w-full text-left'>
                <span className='text-xs font-bold uppercase tracking-wider text-white/80 block'>
                    All Natural Products
                </span>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black leading-tight min-h-18 md:min-h-30'>
                    {currentSlide.title}
                </h1>
                <p className='text-white/90 text-sm md:text-base max-w-lg leading-relaxed min-h-15 md:min-h-20'>
                    {currentSlide.description}
                </p>
                <button className={`${currentSlide.btnColor} ${currentSlide.btnTxtColor} px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg cursor-pointer transition-all`}>
                    Shop Now
                </button>
            </div>

            {/* IMAGE CONTAINER */}
            <div className='w-full md:w-1/2 h-52 md:h-80 flex items-center justify-center overflow-hidden'>
                <img
                    src={currentSlide.image}
                    alt="Shopping Market"
                    className='max-w-full max-h-full object-contain'
                />
            </div>

            {/* DOTS INDICATOR */}
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/20 px-3 py-1.5 rounded-full z-10'>
                {slides.map((_, index) => {
                    const isActive = currentIndex === index;
                    const dotColor = isActive ? 'bg-white scale-125' : 'bg-white/40';
                    return (
                        <div
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${dotColor}`}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default HeroSection;