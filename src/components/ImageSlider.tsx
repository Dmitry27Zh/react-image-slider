import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './ImageSlider.css'

type ImageSliderProps = {
  imageUrls: string[]
}

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img className="img-slider-img" src={imageUrls[imageIndex]} alt="Main image" />
      <button className="img-slider-btn" style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button className="img-slider-btn" style={{ right: 0 }}>
        <ArrowBigRight />
      </button>
    </div>
  )
}

export default ImageSlider
