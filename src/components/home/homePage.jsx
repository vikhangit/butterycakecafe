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
  const isMax500px = useMediaQuery({ maxWidth: 500 });
  const isMin350px = useMediaQuery({ maxWidth: 350 });
  const isMin370px = useMediaQuery({ maxWidth: 370 });
  const isMin300px = useMediaQuery({ maxWidth: 300 });
  return (
    <div className="bg-[#0b1315] pb-[50px] ">
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
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center font-normal">
                  PASTRY | CAFE | PATISSERIE | BRUNCH | CATERING
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81] text-center">
                  <b>BUTTERY'S MENU</b>
                </div>
                {/* <div className="mt-3 text-white text-[20px] sm:text-[24px] md:text-[24px] justify-center items-center text-center leading-[33px]">
                  "<b>Buttery cares about your health</b>" - Buttery quan tâm
                  đến sức khỏe của bạn.
                </div> */}
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
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center font-normal">
                  Discover uniqueness, one sip at a time - Mỗi ngụm là một sự
                  độc đáo riêng biệt
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81]  text-center">
                  <b>THE FINEST DRINK</b>
                </div>
                <div className="mt-3 text-white text-[20px] sm:text-[24px] justify-center items-center text-center leading-[33px]">
                  <b>
                    <i>Awaken Your Senses</i>
                  </b>{" "}
                  - Explore Our World of Exquisite Drinks.
                </div>
                {/* <Link
                  href="#menu"
                  className="border border-[#c9ab81] texxt text-white text-sm px-[35px] py-[10px] mt-5 text-base uppercase"
                >
                  Xem thêm
                </Link> */}
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
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center font-normal">
                  Enjoy Life, Eat Cake
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81] text-center">
                  <b>PASTRY PARADISE</b>
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
                {/* <Link
                  href="#cake"
                  className="border border-[#c9ab81] text-white text-sm px-[35px] py-[10px] mt-5 text-base uppercase"
                >
                  Xem thêm
                </Link> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div
        id="cake"
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] flex items-center flex-col lg:flex-row-reverse gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Our Signature
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">CROISSANT</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>Plain Croissant</b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>59</b>
              </span>
            </div>
            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>
                Mini Plain <br className={isMin350px ? "" : "hidden"} />{" "}
                Croissant
              </b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>20</b>
              </span>
            </div>
            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>
                Mini Truffle <br className={isMin350px ? "" : "hidden"} />{" "}
                Croissant
              </b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>59</b>
              </span>
            </div>

            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>
                Coconut <br className={isMin300px ? "" : "hidden"} /> Pandan
              </b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>98</b>
              </span>
            </div>
            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>
                Thai Red <br className={isMin350px ? "" : "hidden"} /> Milk Tea
              </b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>98</b>
              </span>
            </div>
            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>Bailey Praline</b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>98</b>
              </span>
            </div>
            <div className="flex items-center gap-x-4 whitespace-nowrap">
              <b>Bicolor</b>
              <div
                className="w-full
                h-[5px]"
              ></div>
              <span>
                <b>69</b>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/images/bake/crosaint.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}

      {/* <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] flex items-center flex-col lg:flex-row gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Bake The World A Better Place
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">BAKERY BLISS</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[5px]">
            <div className="text-[#c9ab81] uppercase">
              <b>Scone 2 pieces</b>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Set Scone</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>99</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Set Flavor</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>129</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Earl Grey/ Matcha/ Cafe
              </span>
            </div>
            <div className="text-[#c9ab81] uppercase">
              <b>Madeleine</b>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Original</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Almond</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Cranberry</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Creamcheese</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Chocochip</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Set
                  <br className={isMin300px ? "" : "hidden"} />
                  Madeleine
                </b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>99</b>
                </span>
              </div>
              <span className="text-base leading-tight">3 pieces</span>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Set
                  <br className={isMin300px ? "" : "hidden"} />
                  Madeleine
                </b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>150</b>
                </span>
              </div>
              <span className="text-base leading-tight">5 pieces</span>
            </div>

            <div className="text-[#c9ab81] uppercase">
              <b>Canelé</b>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Original</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Caramel</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>55</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Praline</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>55</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Rasberry</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>55</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Set Canelé</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>139</b>
                </span>
              </div>
              <span className="text-base leading-tight">3 pieces</span>
            </div>

            <div className="text-[#c9ab81] uppercase">
              <b>Financier</b>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Original</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>35</b>
                </span>
              </div>
            </div>

            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Rasberry</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Praline</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>
                  Caramel <br className={isMin300px ? "" : "hidden"} /> Almond
                </b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>55</b>
                </span>
              </div>
            </div>
            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap capitalize">
                <b>Chocochip</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>45</b>
                </span>
              </div>
            </div>

            <div className="pl-[20px]">
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Set
                  <br className={isMin300px ? "" : "hidden"} />
                  Financier
                </b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>150</b>
                </span>
              </div>
              <span className="text-base leading-tight">5 pieces</span>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <Swiper
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
              <div className="relative">
                <Image
                  src="/assets/images/bake/scone.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Scone</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                2 pieces
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>99</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  src="/assets/images/bake/madeleine.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Madeleine</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                5 pieces
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>150</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  src="/assets/images/bake/canele.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Canelé</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                3 pieces
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>139</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/bake/financier.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Financier</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                5 pieces
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>150</b>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

      {/* <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] flex items-start flex-col lg:flex-row-reverse gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Enjoy Life, Eat Cake
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className="uppercase text-center">PASTRY PARADISE</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Black Swan</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>250</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                100% Italian Truffle Mousse, Dark Choco Namalaka, Cacao Sponge
                Cake, Gold Leaf
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Tiramisu</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>159</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Black sponge cake, Mascarpone Cheese, Kahlua, Coffee and Whipped
                cream
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Red Velvet</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>159</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Cream Cheese, Red Sponge Cake, Whipped Cream
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Berry <br className={`${isMin300px ? "" : "hidden"}`} />{" "}
                  Millecrepe
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>139</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Cherry cream, Berries Compote
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Lychee - Rose <br className="block md:hidden" /> Saint Honore
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>149</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Jasminie Cream, Rose Cream. Rose Jam, Lychee Jam, Choux, Cookie
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Dream "Mơ"</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>149</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Apricot, Yuzu, Mousse Dark Choco
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Berry Love</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>149</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Strawberry, Rasberry, Blackberry, White Ganache Monteé
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Blossom Land</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>149</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Matcha, Rasberry, Hojicha, White Choco
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Spring Malibu</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>139</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Malibu, Mango, Pineapple, Coconut, White Chocolate
              </span>
            </div>

          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
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
              <div className="relative">
                <Image
                  src="/assets/images/Cake/BlackSwan.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="text-[19px] text-left leading-normal px-[15px] py-[10px]">
                    <b>OUR SIGNATURE</b>
                  </div>
                </div>
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Black Swan</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                100% Italian Truffle Mousse, Dark Choco Namalaka, Cacao Sponge
                Cake, Gold Leaf
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>250</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  src="/assets/images/Cake/Tiramisu.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="text-[19px] text-left leading-normal px-[15px] py-[10px]">
                    <b>BEST SELLER</b>
                  </div>
                </div>
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Tiramisu</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Black sponge cake, Mascarpone cheese, Kahlua, Coffee and Whipped
                cream
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>159</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <Image
                  src="/assets/images/Cake/RedVelvet.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="text-[19px] text-left leading-normal px-[15px] py-[10px]">
                    <b>BEST SELLER</b>
                  </div>
                </div>
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Red Velvet</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Cream Cheese, Red Sponge Cake, Whipped Cream
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>159</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Cake/BerryMillecrepe.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Berry Millecrepe</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Cherry cream, Berries compote
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>139</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Cake/Lychee-RoseSaintHonore.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Lychee - Rose Saint Honore</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Jasminie Cream, Rose Cream. Rose Jam, Lychee Jam, Choux, Cookie
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>149</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Cake/DreamMo.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Dream "Mơ"</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Apricot, Yuzu, Mousse dark choco
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>149</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Cake/BerryLove.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Berry Love</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Strawberry, Rasberry, Blackberry, White ganache monteé
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>149</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Cake/BlossomLand.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Blossom Land</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Matcha, Rasberry, Hojicha, White choco
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>149</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/Cake/SpringMalibu.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px] uppercase">
                <b>Spring Malibu</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px] px-[10px] sm:px-[25px]">
                Malibu, Mango, Pineapple, Coconut, White Chocolate
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>139</b>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

      <div
        id="menu"
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Cà Phê Việt
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">VIETNAMESE COFFEE</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Black Coffee</b>
                <div
                  className="w-full
                h-[5px]"
                ></div>
                <span>
                  <b>70</b>
                </span>
              </div>
              <span className="text-base leading-tight">Cà phê đen đá</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Milk Coffee</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>75</b>
                </span>
              </div>
              <span className="text-base leading-tight">Cà phê sữa đá</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Salted Coffee</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base text-left leading-tight">
                Cà phê muối
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap `}>
                <b>
                  Coconut Milk{" "}
                  <br className={`${isMin350px ? "" : "hidden"}`} /> Coffee
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base text-left leading-tight">
                Cà phê dừa
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Egg Coffee</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>105</b>
                </span>
              </div>
              <span className="text-base leading-tight">Cà phê trứng</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/decal2.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cotain"
          />
        </div>
      </div>

      <div>
        <div
          className={`${
            isMin500px ? "mx-auto w-11/12 2xl:w-3/4" : "w-full px-[30px]"
          } mt-[100px] grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-y-[50px] gap-x-[50px]`}
          style={{
            direction: "rtl",
          }}
        >
          <div className={`flex flex-col justify-center`}>
            <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Cà Phê Ý
            </div>
            <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex  gap-x-4 justify-center items-center text-center">
              <div className="uppercase text-center">ITALIAN COFFEE</div>
            </div>
            <div className="text-[19px] text-white leading-normal text-left mt-[20px] w-full flex flex-col gap-y-[15px]">
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Espresso</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>75</b>
                  </span>
                </div>
                <span className="text-base leading-tight">Cà phê Espresso</span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 flex-row-reverse whitespace-nowrap">
                  <b>Americano</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>80</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê Americano
                </span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 flex-row-reverse whitespace-nowrap">
                  <b>Cappuccino</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>90</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê Cappuccino
                </span>
              </div>
              <div>
                <div
                  className={`flex items-center gap-x-4 flex-row-reverse ${
                    !isMin350px ? "whitespace-nowrap" : "whitespace-normal"
                  } `}
                >
                  <b>Cappuccino Oat Milk </b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>95</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê sữa hạt Cappuccino
                </span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 flex-row-reverse whitespace-nowrap">
                  <b>Latte</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>90</b>
                  </span>
                </div>
                <span className="text-base leading-tight">Cà phê Latte</span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 flex-row-reverse whitespace-nowrap">
                  <b>Latte Oat Milk</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>95</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê sữa hạt Latte
                </span>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/assets/images/3.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cotain"
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px
            ? "mx-auto w-full lg:w-11/12 2xl:w-3/4"
            : "w-full lg:px-[30px]"
        } mt-[100px] relative`}
      >
        <Image
          src="/assets/images/PosterFoamyDelight.jpg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute w-full h-full top-0 left-0 ">
          <div className="text-[19px] text-white text-left leading-normal px-[15px] py-[10px]">
            <b>
              Life is like coffee, the darker it gets,
              <br
                className={
                  isMin500px
                    ? "hidden sm:block lg:hidden"
                    : "hidden sm:block md:hidden"
                }
              />
              the more it energize
            </b>
          </div>
        </div> */}
      </div>

      <div>
        <div
          className={`${
            isMin500px ? "mx-auto w-11/12 2xl:w-3/4" : "w-full px-[30px]"
          } mt-[100px] grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-y-[50px] gap-x-[50px]`}
          style={{
            direction: "rtl",
          }}
        >
          <div className={`flex flex-col justify-center`}>
            <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Our Selection
            </div>
            <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex  gap-x-4 justify-center items-center text-center">
              <div className="uppercase text-center">SPECIAL COFFEE</div>
            </div>
            <div className="text-[19px] text-white leading-normal text-left mt-[20px] w-full flex flex-col gap-y-[15px]">
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>
                    Gingerita Zest{" "}
                    <br className={`${isMin370px ? "" : "hidden"}`} /> (Cold
                    Brew)
                  </b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>95</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê gừng ủ lạnh
                </span>
              </div>

              <div>
                <div
                  className={`flex items-center flex-row-reverse gap-x-4  whitespace-nowrap `}
                >
                  <b>
                    Coconut Brew{" "}
                    <br className={`${isMin350px ? "" : "hidden"}`} /> Twist{" "}
                  </b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>100</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê dừa ủ lạnh
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
                h-[5px] "
                  ></div>
                  <span>
                    <b>110</b>
                  </span>
                </div>
                <span className="text-base leading-tight">Cà phê Dalgona</span>
              </div>
              <div>
                <div
                  className={`flex items-center flex-row-reverse gap-x-4 ${
                    !isMin300px ? "whitespace-nowrap" : "whitespace-normal"
                  } `}
                >
                  <b>
                    Caramel Salted{" "}
                    <br className={`${isMin350px ? "" : "hidden"}`} /> Cream
                  </b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>110</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Cà phê caramel kem muối
                </span>
              </div>
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Choco Silk</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>95</b>
                  </span>
                </div>
                <span className="text-base leading-tight">Cà phê Choco</span>
              </div>

              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Pandan Forest</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>95</b>
                  </span>
                </div>
                <span className="text-base leading-tight">Cà phê dừa dứa</span>
              </div>
              <div>
                <div className="flex items-center flex-row-reverse gap-x-4 whitespace-nowrap">
                  <b>Truffle Coffee</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>110</b>
                  </span>
                </div>
                <span className="text-base text-left leading-tight">
                  Cà phê Truffle
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
                    src="/assets/images/decal14.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                  <b>Coconut Brew Twist</b>
                </div>
                <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                  Cà phê dừa ủ lạnh
                </div>
                <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                  <b>100</b>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    src="/assets/images/decal15.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                  <b>Gingerita Zest (Cold Brew)</b>
                </div>
                <div className="text-base text-white leading-normal text-center mt-[10px]">
                  Cà phê gừng ủ lạnh
                </div>
                <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                  <b>95</b>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    src="/assets/images/decal1.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                  <b>Dalgona Coffee</b>
                </div>
                <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                  Cà phê Dalgona
                </div>
                <div className="text-base text-white leading-normal text-center mt-[10px]">
                  <b>110</b>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    src="/assets/images/decal8.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                  <b>Caramel Salted Cream</b>
                </div>
                <div className="text-base text-white leading-normal text-center mt-[10px]">
                  Cà phê caramel kem muối
                </div>
                <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                  <b>95</b>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]  pb-[120px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Stay Creamy Keep Refresh
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className="uppercase">CARAMEL Salted CREAM</div>
          </div>
          <div className="text-[19px] text-white leading-normal text-center">
            Kem muối, Espresso, Sữa tươi, Caramel
          </div>
          <div className="text-[19px] text-white leading-normal text-center">
            <b>95</b>
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
      </div> */}

      <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Trà Trái Cây
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className="uppercase text-center">FRUIT TEA & MIX</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Milk Tea <br className={`${isMin300px ? "" : "hidden"}`} />{" "}
                  Blend
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>110</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà sữa lài đá xay
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
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base leading-tight">Trà lài đác thơm</span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Sun Rise</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà lài mứt xoài kem muối
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Cinnamon <br className={`${isMin300px ? "" : "hidden"}`} />{" "}
                  Dolce
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà hoa dâm bụt thơm bưởi hồng
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Basil Smash</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base leading-tight">Trà lài táo xanh</span>
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
                  src="/assets/images/decal13.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>Pineapple Tea With Arenga Pinnata</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                Trà lài đác thơm
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>95</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/decal5.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>Cinnamon Dolce</b>
              </div>
              <div className="text-base text-white leading-normal text-center mt-[10px]">
                Trà hoa dâm bụt thơm bưởi hồng
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>95</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/decal9.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>Basil Smash</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                Trà lài táo xanh
              </div>
              <div className="text-base text-white leading-normal text-center mt-[10px]">
                <b>95</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/decal10.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>Sun Rise</b>
              </div>
              <div className="text-base text-white leading-normal text-center mt-[10px]">
                Trà lài mứt xoài kem muối
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>95</b>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1  gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Nước ép trái cây tuơi
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">FRESH JUICE</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Slim Sipper</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Nước ép táo cam tươi
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Glowing <br className={`${isMin300px ? "" : "hidden"}`} />{" "}
                  Essence
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>95</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Nước ép cam dâu tây
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`${
            isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
          } mt-[100px] grid grid-cols-1 gap-y-[50px] gap-x-[50px]`}
        >
          <div className={`flex flex-col justify-center`}>
            <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
              Sữa chua trái cây tươi
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
                h-[5px] "
                  ></div>
                  <span>
                    <b>135</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Sữa chua yến mạch chuối thanh long
                </span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 whitespace-nowrap">
                  <b>Oasis Bliss</b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>135</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Sữa chua yến mạch xoài thơm chanh dây
                </span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 whitespace-nowrap">
                  <b>
                    Pineapple
                    <br className={isMin350px ? "" : "hidden"} /> Yogurt
                    <br className="block sm:hidden" /> Macchiato
                  </b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>135</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Sữa chua mứt thơm hạt đác macchiato
                </span>
              </div>
              <div>
                <div className="flex items-center gap-x-4 whitespace-nowrap">
                  <b>
                    Strawberry
                    <br className={isMin350px ? "" : "hidden"} /> Yogurt
                    <br className="block sm:hidden" /> Macchiato
                  </b>
                  <div
                    className="w-full
                h-[5px] "
                  ></div>
                  <span>
                    <b>135</b>
                  </span>
                </div>
                <span className="text-base leading-tight">
                  Sữa chua mứt thơm hạt đác macchiato
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 gap-y-[50px] lg:grid-cols-2 gap-y-[50px] gap-x-[30px] mt-[30px] ${
            isMin500px
              ? "mx-auto w-full lg:w-11/12  2xl:w-3/4"
              : "w-full lg:px-[30px]"
          }`}
        >
          <div className="relative">
            <Image
              src="/assets/images/decal7.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/images/decal6.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]  pb-[120px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Trà Tháp Nhiệt Đới
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">TROPICAL ICED TEA POT</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Lychee Rose</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>198</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Tháp trà chunky vải hoa hồng thanh long
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>Pandan Logan</b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>198</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Tháp trà lài nhãn lá dứa
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Double <br className={`${isMin300px ? "" : "hidden"}`} />{" "}
                  Tropical
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>198</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Tháp trà thơm chanh dây mứt xoài
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-end">
            <Image
              src="/assets/images/decal11.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-3/4 md:w-[calc(50%+20px)] h-full"
            />
          </div>
          <div className="absolute top-[90px] left-0 w-full h-full">
            <Image
              src="/assets/images/decal12.jpg"
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
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1  gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            For 2
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <div className=" uppercase text-center">TEA POT</div>
          </div>
          <div className="text-[19px] text-white leading-normal mt-[20px] w-full flex flex-col gap-y-[15px]">
            <div>
              <div className="flex items-center gap-x-4 whitespace-nowrap">
                <b>
                  Curtis Blue <br className="block sm:hidden" /> Berries
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>180</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà Curtis lý chua đen hương việt quất
              </span>
            </div>

            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Curtis <br className={isMin350px ? "" : "hidden"} />{" "}
                  Strawberry
                  <br className="block sm:hidden" /> Mojito
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>180</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà Curtis Mojito dâu tây
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Curtis Energy
                  <br className="sm:hidden" /> Tea
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>180</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà Curtis hương xoài và gừng
              </span>
            </div>

            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Richard <br className={isMin350px ? "" : "hidden"} /> Royal
                  <br className={isMin350px ? "" : "hidden"} /> Grape
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>180</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà đen Ceylon Richard hương nho hoa hồng
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Twinnings Earl <br className={isMin350px ? "" : "hidden"} />
                  Grey Tea
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>180</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà đen bá tước hương cam
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  Olong Tea <br className={isMin350px ? "" : "hidden"} />
                  With Milk
                  <br className={isMin350px ? "" : "hidden"} /> Flavor
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>180</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà ô long hương sữa
              </span>
            </div>

            <div>
              <div className={`flex items-center gap-x-4 whitespace-nowrap`}>
                <b>
                  French Truffle
                  <br className="sm:hidden" /> Tea
                </b>
                <div
                  className="w-full
                h-[5px] "
                ></div>
                <span>
                  <b>190</b>
                </span>
              </div>
              <span className="text-base leading-tight">
                Trà nấm Truffle thượng hạng, cacao hương dừa
              </span>
            </div>
          </div>
        </div>
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
                "https://docs.google.com/forms/d/e/1FAIpQLScqCGqVdg_eHCeUcl-IjrfBAo8cSAT2EKJt5FQ_RWqMe7GaNA/viewform"
              }
              target="_blank"
              className="border text-base border-[#c9ab81] text-white text-sm px-[35px] py-[10px] mt-5 uppercase"
            >
              Đánh giá
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
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
            <br /> OPENING HOUR: 8:30 ─ 23:00
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
      <div
        className={`${
          isMin500px ? "mx-auto w-11/12  2xl:w-3/4" : "w-full px-[30px]"
        } mt-[50px] `}
      >
        <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
          All prices quoted in 1000 VND and subject to 8% VAT
        </div>
      </div>
      <button
        className="fixed bottom-[20px] right-[20px]  md:bottom-[50px] md:right-[50px] text-[#C9AB81] border border-[#C9AB81] rounded-full p-2 z-[9999999]"
        style={{ display: visible ? "" : "none" }}
        onClick={scrollToTop}
      >
        <HiChevronUp size={32} />
      </button>
    </div>
  );
}
