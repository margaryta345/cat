import { Carousel } from "react-bootstrap";

export function CenteredCarousel() {
  return (
    <div className="bg-yellow-400 h-[560px] flex justify-center items-center">
      <div className="w-[450px] mt-12 mb-12">
        <Carousel>
          <Carousel.Item>
            <img src="/1.jpg" className="w-full h-[500px]" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/2.jpg" className="w-full h-[500px]" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/3.jpg" className="w-full h-[500px]" alt="Slide 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/4.jpg" className="w-full h-[500px]" alt="Slide 4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/5.jpg" className="w-full h-[500px]" alt="Slide 5" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
