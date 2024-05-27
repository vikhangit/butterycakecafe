"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { HiChevronUp } from "react-icons/hi2";

export default function HomePage() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisible);

  const isMin500px = useMediaQuery({ minWidth: 500 });
  const isMin350px = useMediaQuery({ maxWidth: 350 });
  const isMin300px = useMediaQuery({ maxWidth: 300 });
  return (
    <div className="bg-[#0b1315] pb-[50px] lg:pb-[100px]">
      <div id="intro">
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Buttery'sMenu.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50">
              <div
                className={`${
                  isMin500px
                    ? "w-2/3 mx-auto md:w-9/12 xl:w-2/3 2xl:w-2/4"
                    : "w-full px-[30px]"
                }  h-full flex justify-center items-center flex-col`}
              >
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center text-miniver">
                  PASTRY | CAFE | PATISSERIE | BRUNCH | CATERING | AFTERNOON TEA
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81] text-center text-metro">
                  BUTTERY'S MENU
                </div>
                <div className="mt-3 text-white text-[20px] sm:text-[24px] md:text-[24px] justify-center items-center text-center leading-[33px]">
                  "<b>Buttery cares about your health</b>" - Buttery quan tâm
                  đến sức khỏe của bạn.
                </div>
                {/* <button className="border border-[#c9ab81] text-white text-sm px-[35px] py-[10px] mt-5">
                Xem thêm
              </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/TheFinestDrink.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${
                  isMin500px
                    ? "w-2/3 mx-auto md:w-9/12 xl:w-2/3 2xl:w-2/4"
                    : "w-full px-[30px]"
                }  h-full flex justify-center items-center flex-col`}
              >
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center text-miniver">
                  Discover uniqueness, one sip at a time - Mỗi ngụm là một sự
                  độc đáo riêng biệt
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81]  text-center text-metro">
                  THE FINEST DRINK
                </div>
                <div className="mt-3 text-white text-[20px] sm:text-[24px] justify-center items-center text-center leading-[33px]">
                  <b>
                    <i>Awaken Your Senses</i>
                  </b>{" "}
                  - Explore Our World of Exquisite Drinks.
                </div>
                {/* <button className="border border-[#c9ab81] text-white text-sm px-[35px] py-[10px] mt-5">
                Xem thêm
              </button> */}
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/PastryParadise.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${
                  isMin500px
                    ? "w-2/3 mx-auto md:w-9/12 xl:w-2/3 2xl:w-2/4"
                    : "w-full px-[30px]"
                }  h-full flex justify-center items-center flex-col`}
              >
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center text-miniver">
                  Enjoy Life, Eat Cake
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81] text-center text-metro">
                  PASTRY PARADISE
                </div>
                <div className="mt-3 flex flex-col text-white text-[20px] sm:text-[24px] justify-center items-center text-center leading-[33px]">
                  <span>
                    <b>
                      <i>Taste the Difference: Buttery’s Cake Journey</i>
                    </b>
                  </span>
                  <span>
                    Được truyền cảm hứng bởi phong cách sống hiện đại và mong
                    muốn truyền tinh thần "thưởng thức một buổi trà bánh - một
                    bữa ăn ngon"
                  </span>
                </div>
                {/* <button className="border border-[#c9ab81] text-white text-sm px-[35px] py-[10px] mt-5">
                Xem thêm
              </button> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Our Selection
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">About COFFEE</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Black Coffee</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Cà phê đen, nước đường
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Milk Coffee</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">Cà phê, Sữa đặc</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>White Coffee</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Cà phê, Sữa đặc, Sữa tươi không đường
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Salted Coffee</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Cà phê, Sữa đặc, Sữa tươi, Kem muối
              </span>
            </div>
            <div>
              <div
                className={`flex items-center gap-x-4 ${
                  !isMin350px ? "whitespace-nowrap" : "whitespace-normal"
                } `}
              >
                <b>Coconut Milk Coffee</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Espresso, Sữa đặc, Nước cốt dừa
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Truffle Coffee</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Espresso, Nấm Truffle trắng, Sữa đặc, Kem muối
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Espresso</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">Cà phê Espresso</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Americano</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">Cà phê, Nước lọc</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Cappuccino</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Espresso, Sữa tươi, Váng sữa
              </span>
            </div>
            <div>
              <div
                className={`flex items-center gap-x-4 ${
                  !isMin350px ? "whitespace-nowrap" : "whitespace-normal"
                } `}
              >
                <b>Cappuccino Oat Milk </b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Espresso, Sữa yến mạch, Váng sữa
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Latte</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Espresso, Sữa tươi, Váng sữa
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Latte Oat milk</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Espresso, Sữa yến mạch, Váng sữa
              </span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/Beverage/AboutCoffee.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <div
          className={`${
            isMin500px
              ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4"
              : "w-full lg:px-[30px]"
          } mt-[100px] grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-y-[50px] gap-x-[50px]`}
          style={{
            direction: "rtl",
          }}
        >
          <div className="flex flex-col justify-center px-[30px] lg:px-0">
            <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Where Coffee Meet Creativy
            </div>
            <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex  gap-x-4 justify-center items-center text-center">
              <div className="uppercase text-center">COLD BREW</div>
            </div>
            <div className="text-[19px] text-white leading-normal text-left mt-[20px] w-full flex flex-col gap-y-[15px]">
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Cold Brew</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">Cà phê ủ lạnh</span>
              </div>
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Gingerita Zest</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê ủ lạnh, Chanh, Gừng, Tonic, Muối viền ly
                </span>
              </div>
              <div>
                <div
                  className={`flex items-center flex-row-reverse gap-x-4 ${
                    !isMin350px ? "whitespace-nowrap" : "whitespace-normal"
                  } `}
                >
                  <b>Coconut Brew Twist </b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê ủ lạnh, Dừa dứa, Cam sành
                </span>
              </div>
              <div>
                <div
                  className={`flex items-center flex-row-reverse gap-x-4 ${
                    !isMin350px ? "whitespace-nowrap" : "whitespace-normal"
                  } `}
                >
                  <b>Old-Grey Fashioned</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Trà Earl Grey, Cold Brew, Cam sành, Angostura bitters
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="relative">
              <div className="h-full">
                <Image
                  src="/assets/images/Beverage/Lifeislikecoffee.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50">
                <div className="text-[19px] text-white text-left leading-normal px-[15px] py-[10px]">
                  <b>Coconut Brew Twist</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Boost your mood with the Fruits
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className="uppercase text-center">FRUIT TEA & MIX</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Love In Idleness</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà hoa dâm bụt, Trà lài, Táo xanh
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Cinamon Dolce</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà lài, Trà hoa dâm bụt, Bưởi hồng, Thơm, Quế
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Sun Rise</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà lài, Mứt xoài, Đào, Kem muối
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Basil Smash</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà xanh lài, Thơm, lá Basil, Dưa leo, Táo xanh, Thạch Hoa quê
              </span>
            </div>
            <div>
              <div
                className={`flex items-center gap-x-4 ${
                  !isMin350px ? "whitespace-nowrap" : "whitespace-normal"
                } `}
              >
                <b>
                  Pineapple Tea With <br className="block md:hidden" /> Arenga
                  Pinnata
                </b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">Trà lài đác thơm</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Slim Sipper</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Nước ép táo, Nước cam tươi
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Glowing Essence</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Nước ép dâu tây, Nước cam tươi
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Lean Libation</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Nước ép táo, Lá dứa
              </span>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Beverage/LoveIdleness.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>LOVE IDLENESS</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                Trà hoa dâm bụt, Trà lài, Táo xanh
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Beverage/CinamonDolce.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>CINAMON DOLCE</b>
              </div>
              <div className="text-base text-white leading-normal text-center mt-[10px]">
                Trà lài, Trà hoa dâm bụt, Bưởi hồng, Thơm, Quế
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Beverage/BasilSmash.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>BASIL SMASH</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                Trà xanh lài, Thơm, lá Basil, Dưa leo, Táo xanh, Thạch Hoa quê
              </div>
              <div className="text-base text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Beverage/SunRise.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>SUN RISE</b>
              </div>
              <div className="text-base text-white leading-normal text-center mt-[10px]">
                Trà lài, Mứt xoài, Đào, Kem muối
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div>
        <div
          className={`${
            isMin500px
              ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4"
              : "w-full px-[30px]"
          } mt-[100px] grid grid-cols-1 gap-y-[50px] gap-x-[50px]`}
        >
          <div>
            <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Healthy Special
            </div>
            <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
              <div className=" uppercase text-center">YOGURT BOWL</div>
            </div>
            <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
              <div>
                <div className="flex items-center gap-x-4 whitespace-nowrap">
                  <b>Pink Pataya</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Sữa chua, Yến mạch, Thanh long đỏ, Chuối già, Cam vàng, Hạt
                  chia
                </span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 whitespace-nowrap">
                  <b>Oasis Bliss</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Sữa chua, Yến mạch, Xoài, Thơm, Chanh dây, Dâu tây, Hạt chia
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 gap-y-[50px] lg:grid-cols-2 gap-y-[50px] gap-x-[30px] mt-[30px] ${
            isMin500px
              ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4"
              : "w-full lg:px-[30px]"
          }`}
        >
          <div className="relative">
            <Image
              src="/assets/images/Beverage/PinkPataya.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full flex justify-center items-end top-0 left-0 bg-black bg-opacity-50">
              <div className="text-[19px] text-white text-left leading-normal px-[15px] py-[10px]">
                <b>Pink Pataya</b>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/Beverage/OasisBliss.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full flex justify-center items-end top-0 left-0 bg-black bg-opacity-50">
              <div className="text-[19px]  text-white text-left leading-normal px-[15px] py-[10px]">
                <b>Oasis Bliss</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]  pb-[120px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Stay Creamy Keep Refresh
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className="uppercase">CARAMEL SATED CREAM</div>
          </div>
          <div className="text-[19px] text-white leading-normal text-center">
            Kem muối, Espresso, Sữa tươi, Caramel
          </div>
          <div className="text-[19px] text-white leading-normal text-center">
            <b>50</b>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-end">
            <Image
              src="/assets/images/Beverage/CaramelSatedCream2.png"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-3/4 md:w-[calc(50%+20px)] h-full"
            />
          </div>
          <div className="absolute top-[90px] left-0 w-full h-full">
            <Image
              src="/assets/images/Beverage/CaramelSatedCream1.png"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-3/4 md:w-[calc(50%+20px)] h-full"
            />
          </div>
        </div>
      </div>

      <div>
        <div
          className={`${
            isMin500px
              ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4"
              : "w-full lg:px-[30px]"
          } mt-[100px] grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-y-[50px] gap-x-[50px]`}
          style={{
            direction: "rtl",
          }}
        >
          <div className="flex flex-col justify-center px-[30px] lg:px-0">
            {/* <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Where Coffee Meet Creativy
            </div> */}
            <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex  gap-x-4 justify-center items-center text-center">
              <div className="uppercase text-center">FOAMY DELIGHT</div>
            </div>
            <div className="text-[19px] text-white leading-normal text-left mt-[20px] w-full flex flex-col gap-y-[15px]">
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Pandan Fores</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Kem muối, Espresso, Sữa lá dứa
                </span>
              </div>
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Choco Silk</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Dalgona, Espresso, Sữa tươi, Chocolate
                </span>
              </div>
              <div>
                <div
                  className={`flex items-center flex-row-reverse gap-x-4 ${
                    !isMin300px ? "whitespace-nowrap" : "whitespace-normal"
                  } `}
                >
                  <b>Dalgona Coffee</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Dalgona, Espresso, Sữa tươi
                </span>
              </div>
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Oreo Mint</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Bánh quy Oreo, Cacao, Sữa, Chocolate, Kem muối
                </span>
              </div>
              <div>
                <div
                  className={`flex items-center flex-row-reverse gap-x-4 ${
                    !isMin300px ? "whitespace-nowrap" : "whitespace-normal"
                  } `}
                >
                  <b>Milk Tea Blend</b>
                  <div
                    className="w-full
                h-[5px] border-b border-t"
                  ></div>
                  <span>
                    <b>50</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Trà sữa lài, Sữa đặc, Dalgona, Trân Châu Trắng
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="relative">
              <div className="h-full">
                <Image
                  src="/assets/images/Beverage/StayCreamyKeepRefresh.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50">
                <div className="text-[19px] text-white text-left leading-normal px-[15px] py-[10px]">
                  <b>Coconut Brew Twist</b>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]  pb-[120px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Opening Senses
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">TROPICAL ICE TEA POT</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Lychee Rose</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Chunky vải & Hoa Hồng, Thanh long đỏ, Chanh tươi
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Pandan Logan</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Nhãn, Lá dứa, Trà lài
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Double Tropical</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Chanh dây, Thơm, Mứt xoài, Trà lài
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-end">
            <Image
              src="/assets/images/Beverage/Tropicalteapot1.png"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-3/4 md:w-[calc(50%+20px)] h-full"
            />
          </div>
          <div className="absolute top-[90px] left-0 w-full h-full">
            <Image
              src="/assets/images/Beverage/Tropicalteapot2.png"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-3/4 md:w-[calc(50%+20px)] h-full"
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1  gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Just Hot
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">TEA POT</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  The Caramel <br className="block sm:hidden" /> Toffee
                </b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà đen hương hoa nhà
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Earl Grey <br className={isMin350px ? "" : "hidden"} /> Yin{" "}
                  <br className={isMin350px ? "hidden" : "sm:hidden"} /> Zhen{" "}
                  <br className={isMin350px ? "" : "hidden"} /> Tea
                </b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà đen bá tước kết hợp với Cam Bergamot
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Fruit Infusion <br className="sm:hidden" /> Carcadet{" "}
                  <br
                    className={isMin350px ? "" : "hidden sm:block md:hidden"}
                  />
                  Provence
                  <br className="sm:hidden" /> Tea
                </b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà hoa dâm bụt kết hợp táo, vỏ cam và vỏ tầm xuân
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Darjeeling Tea</b>
                <div
                  className="w-full
                h-[5px] border-b border-t"
                ></div>
                <span>
                  <b>50</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà đen Darjeeling
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="cake" className="mt-[70px] md:mt-[50px]">
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/BlackSwan.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Black Swan
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Bánh handmade tỉ mỉ với lớp lông vũ làm bằng Chocolate, phía
                  trên được đổ lớp Glaze bóng, điểm xuyến bằng nhũ vàng ở cổ
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>250</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/Tiramisu.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Tiramisu
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Sự kết hợp hoàn hảo giữa "cà phê đậm đà" và "rượu Kahlua", phủ
                  trên nó là "sốt Lava" sánh mịn, là điểm nhấn độc đáo, hòa
                  quyện cùng từng lớp bánh mềm mại
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>159</b>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/RedVelvet.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Red Velvet
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Lớp bánh ẩm, mềm, kết hợp với Cream Chesse cùng với sốt Lava
                  tạo nên các tầng hương vị ngọt và béo
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>159</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/BerryMillecrepe.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Berry Millecrepe
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Bánh nổi bật với những lớp crepe mềm tan, đan xen với lớp kem
                  cherry chua ngọt, kết hợp cùng các loại Berries Frozen
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>139</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/Lychee-RoseSaintHonore.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Lychee - Rose Saint Honore
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Bánh được kết hợp với lớp mứt hoa hồng tươi, những cánh hoa
                  được chọn lựa chế biến kỹ càng theo công thức đặc biệt của
                  riêng Buttery. Vị chua ngọt của vải hoa hồng cùng với vẻ đẹp
                  màu hồng nữ tính
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>149</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/DreamMo.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Dream "Mơ"
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Bánh được phủ 1 lớp tráng gương, chua ngọt và thơm ngon, điểm
                  nhấn vài miếng Chocolate vàng kết hợp cùng hoa tươi.
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>149</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/BerryLove.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Berry Love
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Bánh được bao bọc bởi lớp chocolate, phía trên được decor bằng
                  trái cây tươi, những trái berry mọng nước, kết hợp với lớp kem
                  béo và nhân dâu chua chua nhẹ
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>149</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/BlossomLand.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Blosom Land
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Lớp ngoài của bánh được phun bơ Cacao, Matcha Cream đóng vai
                  trò là hương vị nền kết hợp với Rasberry Jam
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>149</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/SpringMalibu.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Spring Malibu
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Là sự kết hợp giữa xoài và thơm, cùng với vị ngọt của rượu
                  Malibu và vị béo của kem. Mềm tan và béo nhẹ, chắc chắn sẽ
                  mang lại trải nghiệm độc đáo cho vị giác
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>139</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/assets/images/Cake/ChocoCream.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0  bg-black bg-opacity-50">
              <div
                className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
              >
                <div className="text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center uppercase">
                  Choco Cream
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  Với lớp bánh quy Sô-cô-la mềm mịn, điểm xuyến bởi những quả
                  cranberry tươi, phủ trên nó là lớp kem tươi siêu mịn, mang đến
                  hương vị đậm đà và tan chảy trong miệng
                </div>
                <div className="mt-3 text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
                  <b>120</b>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full h-[600px] md:h-[800px] relative mt-[50px] md:mt-[100px]">
        <Image
          src="/assets/images/CustomerFeedback.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50">
          <div
            className={`${"w-full sm:w-5/6 md:w-3/4 xl:w-1/2 mx-auto px-[30px] md:px-0"}  h-full flex justify-center items-center flex-col`}
          >
            <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Write To Us
            </div>
            <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
              <div className=" uppercase text-center">CUSTOMER FEEDBACK</div>
            </div>
            <div className="text-[19px] text-center text-white leading-normal mt-[20px] w-full gap-y-[15px]">
              <b>WE NEED YOU</b> - Góp ý của bạn sẽ giúp Buttery nâng cao chất
              lượng và dịch vụ
            </div>
            <Link
              href={
                "https://docs.google.com/forms/d/16CJ5c6X_AFhq7IlD9GgnvkASsWUuijKj6U1hMbRCPyQ/prefill"
              }
              target="_blank"
              className="border text-base border-[#c9ab81] text-white text-sm px-[35px] py-[10px] mt-5 uppercase"
            >
              Gửi đánh giá
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Find Us
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] md:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">VISIT BUTTERY</div>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            <Link
              href={
                "https://www.google.com/maps/dir/10.825103,106.6409201/Buttery+Cake+%26+Cafe,+M%E1%BA%A1c+Th%E1%BB%8B+B%C6%B0%E1%BB%9Fi,+B%E1%BA%BFn+Ngh%C3%A9,+District+1,+Ho+Chi+Minh+City/@10.8069842,106.6272309,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31752f9343251c81:0xef6ae364d9f70fa9!2m2!1d106.7039635!2d10.7746305?entry=ttu"
              }
              target="_blank"
            >
              94 Mạc Thị Bưởi, Phường Bến Nghé, Quận 1, TP HCM
            </Link>{" "}
            <br />
            <br />
            <Link href={"tel:0878929899"} target="_blank">
              HOTLINE: 087.8929.899
            </Link>{" "}
            <br /> OPENING HOUR: 8:30 ─ 22:30
          </div>
          <div className="mt-[20px] flex justify-center items-center gap-x-4 text-[20px]">
            <Link
              href={"https://www.facebook.com/butterycakecafe/"}
              target="_blank"
              className="text-[#C9AB81] hover:text-[#6d604e]"
            >
              <FiFacebook />
            </Link>
            <Link
              href={"https://www.instagram.com/butterycakecafe/"}
              target="_blank"
              className="text-[#C9AB81] hover:text-[#6d604e]"
            >
              <FiInstagram />
            </Link>
            <Link
              href={"https://www.instagram.com/butterycakeorder/"}
              target="_blank"
              className="text-[#C9AB81] hover:text-[#6d604e]"
            >
              <FiInstagram />
            </Link>
            <Link
              href={"tiktok.com/@butterycakecafe"}
              target="_blank"
              className="text-[#C9AB81] hover:text-[#6d604e]"
            >
              <PiTiktokLogo />
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/images/VisitButtery.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <button
        className="fixed bottom-[50px] right-[50px] text-[#C9AB81] border border-[#C9AB81] rounded-full p-2 z-[9999999]"
        style={{ display: visible ? "" : "none" }}
        onClick={scrollToTop}
      >
        <HiChevronUp size={32} />
      </button>
    </div>
  );
}
