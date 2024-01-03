import car1 from './assets/imgs/car-1.jpg'
import car2 from './assets/imgs/car-2.jpg'
import car3 from './assets/imgs/car-3.jpg'
import car4 from './assets/imgs/car-4.jpg'
import car5 from './assets/imgs/car-5.jpg'
import ImageSlider from './components/ImageSlider'

const IMAGES = [car1, car2, car3, car4, car5]

function App() {
  return <ImageSlider imageUrls={IMAGES} />
}

export default App
