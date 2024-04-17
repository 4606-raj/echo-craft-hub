import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import slider1 from '../../../public/slider-1.jpeg';
import "./ui.css";

const images = [
  {
    original: slider1,
    description: 'test https://picsum.photos/id/1018/1000/600/',
    originalClass: 'slider-image',
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

export default function HomeSlider() {
    return <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} autoPlay={true} />;
}