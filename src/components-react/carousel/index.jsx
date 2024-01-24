
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const properties = {
  infinite: true,
  duration: 0,
  transitionDuration: 8000,
  autoplay: true,
  prevArrow: (<button style={{ width: 0, height: 0 }}></button>),
  nextArrow: (<button style={{ width: 0, height: 0 }}></button>),
  slidesToShow: 3,
  responsive: [
    // {
    //   breakpoint: 800,
    //   settings: {
    //     infinite: true,
    //     duration: 0,
    //     transitionDuration: 10000,
    //     autoplay: true,
    //     slidesToShow: 3,
    //   },
    // },
    // {
    //   breakpoint: 500,
    //   settings: {
    //     slidesToShow: 3,
    //   },
    // },
  ],
};

const Carousel = ({ images, config = {}, left = false }) => {
  return (
    <div className={`${left ? "slide-left" : ""} w-full min-h-[50px] md:min-h-[80px]`}>
      <Slide {...{ ...properties, ...config }}>
        {images.map(({ src, name }) => (
          <div
            className="each-slide-effect flex justify-center min-w-[140px] min-h-[50px] md:min-h-[80px] 
            px-1 items-center "
            key={name}
          >
            <img src={src} alt={name} className="w-[100%]" />
          </div>
        ))}
      </Slide>
    </div>
  );
};



export default Carousel;