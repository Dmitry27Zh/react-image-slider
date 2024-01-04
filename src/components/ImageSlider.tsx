import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import './ImageSlider.css'

type Image = {
  url: string
  alt: string
}

type ImageSliderProps = {
  images: Image[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)
  const showPrevImage = () => {
    setImageIndex((prevState) => {
      if (prevState === 0) {
        return images.length - 1
      } else {
        return imageIndex - 1
      }
    })
  }
  const showNextImage = () => {
    setImageIndex((prevState) => {
      if (prevState === images.length - 1) {
        return 0
      } else {
        return imageIndex + 1
      }
    })
  }

  return (
    <section aria-label="Image Slider" style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <img
            key={image.url}
            className="img-slider-img"
            src={image.url}
            alt={image.alt}
            aria-hidden={index !== imageIndex}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button className="img-slider-btn" style={{ left: 0 }} onClick={showPrevImage} aria-label="View Previous Image">
        <ArrowBigLeft aria-hidden />
      </button>
      <button className="img-slider-btn" style={{ right: 0 }} onClick={showNextImage} aria-label="View Next Image">
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {images.map((_, index) => (
          <button
            key={crypto.randomUUID()}
            className="img-slider-page"
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ImageSlider
