"use client";
import Link from "next/link";
import { FC, useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { Swiper as SwiperCore } from "swiper/types";

interface Props {
  title: string;
  contentArr: Array<{ id: number; image: StaticImageData }>;
  link: string;
}

const CollectionCarousel: FC<Props> = ({ title, contentArr, link }) => {
  const swiperRef = useRef<SwiperCore>();
  const nextRef = useRef<any>(null);

  const [endState, setEndState] = useState(false);
  const [startState, setStartState] = useState(true);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.isEnd) {
      setEndState(true);
      setStartState(false);
    } else if (swiperRef.current && swiperRef.current.isBeginning) {
      setEndState(false);
      setStartState(true);
    } else {
      setEndState(false);
      setStartState(false);
    }
  };

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const autoplay = {
    delay: 5000,
    disableOnInteraction: true,
  };

  const breakpoints = {
    "1024": {
      slidesPerView: 5,
      spaceBetween: 3,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    "680": {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    
  };

  return (
    <div className="carousel-collection">
      <div className="flex justify-between items-center ">
        <h4 className=" font-semibold text-[26px] md:text-[40px] font-grotesk  ">{title}</h4>
        <div className="flex items-center gap-5 ">
          <Link href={link} className="text-[18px] md:text-[23px]  ">
            See more
          </Link>
          <div className=" hidden md:flex items-center gap-5">
            <button
              className="carousel-btn"
              onClick={handlePrev}
              disabled={startState}
            >
              <ArrowLeft />
            </button>
            <button
              className="carousel-btn"
              onClick={handleNext}
              disabled={endState}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[25px] lg:mt-[60px] ">
        <Swiper
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          // autoplay={autoplay}
          breakpoints={breakpoints}
          navigation={{
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {contentArr.map((item) => (
            <SwiperSlide className="" key={`collection-${item.id}`}>
              <div className="rounded-[0.721rem] relative flex items-center justify-center bg-white h-[100px] w-[150px] md:h-[140px]  md:w-[240px]  ">
                <Image
                  src={item.image}
                  alt="img"
                  className=" rounded-[0.721rem] w-[90%] h-[85%] aspect-[3/2] object-contain  "
                  sizes="100%"
                  

                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CollectionCarousel;
