
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


 
      const properties = {
        infinite: true,
        duration: 1000,
        prevArrow: ( <button style={{ width: 0, height: 0  }}></button>
          
        ),
        nextArrow: (
            <button style={{ width: 0, height: 0  }}></button>
        ),
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      };

      const Carousel = ({ images, config = {}, left = false }) => {
        console.log(images); // para verificar qué está recibiendo images

        return (
          <div className={`${left ? "slide-left" : ""} w-full bg-transparent  h-[50px]  px-1`}>
            <Slide {...{ ...properties, ...config }}>
              {images.map(({ src, name }) => (
                <div
                  className="each-slide-effect flex justify-center min-w-[140px] h-[50px] px-1 items-center"
                  key={name}
                >
                  <img src={src} alt={name} className="w-auto h-[130px] " />
                </div>
              ))}
            </Slide>
          </div>
        );
      };
      
      

export default Carousel;