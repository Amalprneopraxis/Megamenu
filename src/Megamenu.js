import React, { useState, useEffect } from 'react';
import './components/header/Megamenu.css';

const Megamenu = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Start from the first slide

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment slide index cyclically
            setSlideIndex(prevIndex => (prevIndex + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []); // Run only once on component mount

    return (
        <div className="slideshow-container">
            <div className="mySlides" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
                <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
            </div>
            <div className="mySlides" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                <q>But man is not made for defeat.</q>
            </div>
            <div className="mySlides" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
                <q>I have not failed. I've just found 10,000 ways that won't work.</q>
            </div>
        </div>
    );
};

export default Megamenu;
