import React, { useRef, useEffect, useState } from 'react'


const photos = [
    { src: '/images/chicken-wings.jpg', alt: 'Salt & pepper wings'},
    { src: '/images/tempura-udon.jpg', alt: 'Tempura udon soup'},
    { src: '/images/steak_bg.jpg', alt: 'Hibachi steak'},
    { src: '/images/cc-army.jpg', alt: 'CC & Army roll'}
];


const Photos = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let animationFrameId;

        const scroll = () => {
            if (!isPaused && scrollRef.current) {
                scrollRef.current.scrollLeft += 1;

                if (
                    scrollRef.current.scrollLeft >=
                    scrollRef.current.scrollWidth - scrollRef.current.clientWidth
                ) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);
    
  return (
    <section className="bg-[#87bd80] py-4 text-center">
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        >
        {photos.map((photo, index) => (
            <div
                key={index}
                className="inline-block mr-1 w-60 md:w-80 relative"
            >
            <img
                key={index}
                src={photo.src}
                alt={photo.alt}
                className="inline-block mr-1 h-60 w-60 md:h-80 md:w-80 rounded object-cover"
                loading="lazy"
            />
            <p className="absolute bottom-2 left-0 right-0 text-center text-sm text-white bg-black/50 rounded px-2">{photo.alt}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Photos
