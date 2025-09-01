import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css'

export function EmblaCarousel({slides}) {
  const [emblaRef] = useEmblaCarousel({ loop: true },[
    Autoplay({delay: 3000})
  ])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <img className="embla__slide__img" src={slide.image} alt={slide.title} />
            <div className="embla__slide__content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EmblaCarousel;
