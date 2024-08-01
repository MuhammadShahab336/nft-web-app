import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

import one from '@public/characters/1.png'
import two from '@public/characters/2.png'
import three from '@public/characters/3.png'
import four from '@public/characters/4.png'
import five from '@public/characters/5.png'


const images = [
    one,
    two,
    three,
    four,
    five,
]

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='overflow-hidden' style={{ position: 'relative', width: '5rem', height: '5rem', background: 'radial-gradient(50% 50% at 50.25% 50%, #BAFA50 0%, #65A300 100%)' }}>
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >

                    <Image
                        alt={`Image ${currentImageIndex + 1}`}
                        src={images[currentImageIndex]}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "contain",
                        }}
                    />

                </motion.div>
            </div>
        </>
    )
}

export default ImageSlider