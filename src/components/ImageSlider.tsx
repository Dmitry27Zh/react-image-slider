type ImageSliderProps = {
  imageUrls: string[]
}

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  return <div>Image slider: {imageUrls}</div>
}

export default ImageSlider
