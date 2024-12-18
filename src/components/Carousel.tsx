import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { SwiperProps } from 'swiper/react';

interface Slide {
  title: string;
  description: string;
  image: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="swiper-container h-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/50">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8">
                      {slide.description}
                    </p>
                    <a
                      href="#register"
                      className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg transition-colors duration-300"
                    >
                      ثبت‌نام دوره
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}