import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image, VStack, Text } from "@chakra-ui/react";
import Router from "next/router"

import { Continent } from "../../contexts/ContinentsContext";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface CarouselProps { 
  continents: Continent[];
}

export const Carousel = ({ continents }: CarouselProps) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper"
      style={{
        width: "90%",
        height: "450px",
        marginBottom: "30px",
        marginTop: "30px",
        color: "yellow.900",
      }}
    >
      {continents.map((continent, key) => (
        <SwiperSlide key={key} style={{ position: "relative", cursor: "pointer" }} onClick={() => Router.push(continent.name)}>
          <Image src={continent.image} objectFit="cover" height="100%" />
          <VStack
            position="absolute"
            top="170px"
            left="0"
            right="0"
            zIndex="100"
          >
            <Text fontSize="48" fontWeight="700" color="white.100">
              {continent.name}
            </Text>
            <Text
              fontSize="24"
              fontWeight="700"
              color="white.100"
              textAlign="center"
            >
              {continent.description}
            </Text>
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
