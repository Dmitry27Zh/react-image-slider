import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './ImageSlider.css'

type ImageSliderProps = {
  imageUrls: string[]
}

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)
  const showPrevImage = () => {
    setImageIndex((prevState) => {
      if (prevState === 0) {
        return imageUrls.length - 1
      } else {
        return imageIndex - 1
      }
    })
  }
  const showNextImage = () => {
    setImageIndex((prevState) => {
      if (prevState === imageUrls.length - 1) {
        return 0
      } else {
        return imageIndex + 1
      }
    })
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
        {imageUrls.map((imageUrl) => (
          <img
            key={imageUrl}
            className="img-slider-img"
            src={imageUrl}
            alt="Image"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button className="img-slider-btn" style={{ left: 0 }} onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <button className="img-slider-btn" style={{ right: 0 }} onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  )
}

export default ImageSlider
