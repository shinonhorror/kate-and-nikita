import * as S from './styled';
import location1 from '../../../../assets/images/location-1.png';
import location2 from '../../../../assets/images/location-2.png';
import ceremony1 from '../../../../assets/images/ceremony-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const LocationSection = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>Церемония</S.Title>
        <S.Description> ЗАГС Центрального района</S.Description>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={8}
          loop={true}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        >
          <SwiperSlide>
            <img src={ceremony1} alt="" />
          </SwiperSlide>
        </Swiper>
        <S.Description>Санкт-Петербург, Суворовский пр., д.41</S.Description>
        <S.Button
          onClick={() =>
            window.open('https://yandex.ru/maps/-/CHHnYHya', '_blank')
          }
        >
          Посмотреть на карте
        </S.Button>
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>Место проведения</S.Title>
        <S.Description>A.Loft, зал 1782</S.Description>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={8}
          loop={true}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        >
          <SwiperSlide>
            <img src={location1} alt="" />
          </SwiperSlide>{' '}
          <SwiperSlide>
            <img src={location2} alt="" />
          </SwiperSlide>{' '}
        </Swiper>
        <S.Description>
          Санкт-Петербург, <br /> Арсенальная улица, 2
        </S.Description>
        <S.Button
          onClick={() =>
            window.open('https://yandex.ru/maps/-/CHHnYMms', '_blank')
          }
        >
          Посмотреть на карте
        </S.Button>
      </S.Wrapper>
    </>
  );
};

export default LocationSection;
