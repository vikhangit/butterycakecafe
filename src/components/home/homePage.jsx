"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";

export default function HomePage() {
  const isMin500px = useMediaQuery({ minWidth: 500 });
  return (
    <div className="bg-[#0b1315]">
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
              src="/assets/images/WelcomeToButtery.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50">
              <div
                className={`${
                  isMin500px
                    ? "w-2/3 mx-auto md:w-10/12 lg:w-2/3 2xl:w-2/4"
                    : "w-full px-[30px]"
                }  h-full flex justify-center items-center flex-col`}
              >
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center text-miniver">
                  Take a trip to our selection/ Khám phá những hương vị của
                  chúng tôi
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81] text-center text-metro">
                  WELCOME TO BUTTERY
                </div>
                <div className="mt-3 flex flex-col text-white text-[20px] sm:text-[24px] md:text-[24px] justify-center items-center text-center leading-[33px]">
                  <span>
                    PASTRY | CAFE | PATISSERIE | BRUNCH | CATERING | AFTERNOON
                    TEA
                  </span>
                  <span>
                    "<b>Buttery cares about your health</b>" Buttery quan tâm
                    đến sức khỏe của bạn.
                  </span>
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
                    ? "w-2/3 mx-auto md:w-11/12 2xl:w-2/4"
                    : "w-full px-[30px]"
                }  h-full flex justify-center items-center flex-col`}
              >
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center text-miniver">
                  Enjoy Life, Eat Cake
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81]  text-center text-metro">
                  PATISSERIE HAVEN / PASTRY PARADISE
                </div>
                <div className="mt-3 flex flex-col text-white text-[20px] sm:text-[24px] justify-center items-center text-center leading-[33px]">
                  <span>
                    <b>
                      <i>Awaken Your Senses</i>
                    </b>{" "}
                    - Explore Our World of Exquisite Drinks.
                  </span>
                  <span>
                    Từ những chiếc bánh thơm ngon cho đến những ly thức uống
                    được pha chế tỉ mỉ, Buttery Cake & Cafe tự hào mang đến một
                    trải nghiệm vô cùng mới lạ và độc đáo, mỗi hương vị đều là
                    một niềm vui cho vị giác của bạn
                  </span>
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
                    ? "w-2/3 mx-auto md:w-11/12 2xl:w-2/4"
                    : "w-full px-[30px]"
                }  h-full flex justify-center items-center flex-col`}
              >
                <div className="hidden md:block text-[25px] text-[#c9ab81] text-center text-miniver">
                  Take a trip to our selection/ Khám phá những hương vị của
                  chúng tôi
                </div>
                <div className="text-[42px] md:text-[75px] text-[#c9ab81] text-center text-metro">
                  WELCOME TO BUTTERY
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
                    bữa ăn ngon: là một cách để tận hưởng cuộc sống mỗi ngày đến
                    với khách hàng, Buttery đặt tâm huyết của mình không chỉ
                    trong từng sản phẩm mà còn trong cả hành trình trải nghiệm
                    trọn vẹn của khách hàng.
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
        } mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Our Selection
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[200px] sm:w-auto uppercase text-center">
              About COFFEE
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            Life is like coffee, the darker it gets, the more it energize <br />{" "}
            <br /> <b>BLACK COFFEE</b> (Cà Phê Đá) - <b>50</b> <br />{" "}
            <b> MILK COFFEE</b> (Cà Phê Sữa Đá) - <b>50</b> <br />{" "}
            <b>CAPPUCCINO</b> (Cà Phê Espresso, sữa tươi, váng sữa) - <b>50</b>
            <br /> <b>LATTE</b> (Cà phê Espresso, sữa tươi, váng sữa) -{" "}
            <b>50</b>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/AboutCoffee.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 gap-y-[50px] gap-x-[50px]`}
      >
        <div>
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Where Coffee Meet Creativy
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex  gap-x-4 justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[150px] sm:w-auto uppercase text-center">
              COLD BREW
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            <b>
              Khám phá hương vị của các loại cocktail trong từng ly cà phê tại
              Buttery Cake & Cafe.
            </b>
            <br />
            <br />
            Hãy tưởng tượng hấp dẫn nhiệt đới của một Pina Colada được biến hóa
            thành một ly cà phê lạnh vị dừa và dứa, hoặc sự mạnh mẽ của một Old
            Fashioned được tái tạo với những nốt hương khói xoay quanh tách cà
            phê của bạn. Ly cà phê Margarita với viền muối sẽ thêm một chút
            hương vị chua vào mỗi ngụm, tạo nên một sự kết hợp bất ngờ và thú vị
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[30px] gap-x-[20px]">
          <div>
            <div>
              <Image
                src="/assets/images/MargaritaColdBrew.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full mt-[30px] object-cover"
              />
            </div>
            <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
              <b>MARGARITA COLD BREW</b>
            </div>
            <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
              (Adore Cold Brew Coffee, Chanh, Gừng)
            </div>
            <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
              <b>50</b>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/assets/images/PinaColadaColdBrew.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full mt-[30px] object-cover"
              />
            </div>
            <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
              <b>PINA COLADA COLD BREW</b>
            </div>
            <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
              (Adore Cold Brew, Sữa dừa dứa, vỏ cam)
            </div>
            <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
              <b>50</b>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/assets/images/OldFashionColdBrew.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full mt-[30px] object-cover"
              />
            </div>
            <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
              <b>OLD FASHION COLD BREW</b>
            </div>
            <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
              (Adore Cold Brew, cam vàng, Earl Grey)
            </div>
            <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
              <b>50</b>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 gap-y-[50px] gap-x-[50px]`}
      >
        <div>
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            True Taste
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[250px] sm:w-auto uppercase text-center">
              HEALTHY SPECIALTIES
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            Buttery không chỉ mang đến hương vị ngọt ngào, mà còn đặt sức khỏe
            của bạn lên hàng đầu. Chúng tôi cam kết sử dụng trái cây tươi nhất,
            được chọn lọc cẩn thận để tạo nên những ly thức uống không chỉ tươi
            mới mà còn đầy ắp vitamin và khoáng chất. Với Buttery, mỗi ngụm thức
            uống là một lời nhắc nhở về lựa chọn lành mạnh cho cơ thể bạn.{" "}
            <br />
            <br />─ <b>PINK PATAYA</b> (Thanh long đỏ, Chuối, Sữa chua, Cam
            Vàng, Dâu tây, Yến mạch, Hạt chia) ─ <b>50</b> <br /> ─
            <b>TROPICAL SUMMER</b> ( Chuối, Xoài, Thơm, Chanh Dây, Sữa chua, Yến
            mạch, Hạt chia) ─ <b>50</b>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-[30px] lg:grid-cols-2 gap-y-[30px] gap-x-[30px]">
          <div>
            <Image
              src="/assets/images/PinkPataya.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/assets/images/TropicalSummer.png"
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
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/images/quote-mark.png"
              width={50}
              height={50}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className=" mt-[50px] text-white text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            TROPICAL ICED TEA POT
          </div>
          <div className="text-[19px] text-[#c9ab81] leading-normal text-center mt-[10px] text-miniver">
            Pandan Longan (Trà lài, nhãn, lá dứa) <br /> Lychee Rose (Trà lài,
            thanh long đỏ, vải) <br /> Double Tropical (Trà lài, thowmm, chanh
            dây, mứt xoài)
          </div>
          <div className="text-white text-[19px] text-center mt-[10px]">
            210k+
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
              <Image
                src="/assets/images/Tropicalteapot1.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Image
                src="/assets/images/Tropicalteapot2.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-y-[50px] gap-x-[50px]`}
        style={{
          direction: "rtl",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Boost your mood with the Fruits
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[250px] sm:w-auto uppercase text-center">
              Opening Senses
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            Từ vị ngọt thanh khiết đến chua nhẹ, mỗi loại đều là sự kết hợp tinh
            tế, mang lại cho bạn không chỉ là một thức uống ngon miệng mà còn là
            nguồn năng lượng mới, giúp cải thiện tâm trạng một cách nhẹ nhàng.
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
                  src="/assets/images/LoveIdleness.png"
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
                (Táo xanh, Trà hoa dâm bụt, trà lài)
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/CinamonDolce.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>CINAMON DOLCE</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                (Pomona Bưởi Hồng, Thơm, Quế, Trà hoa dâm bụt)
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/BasilSmash.png"
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
                (Pomona Táo xanh. Dưa leo, Basil, Thạch Hoa quê, Thơm)
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/images/SunRise.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[19px] text-[#9C7C57] leading-normal text-center mt-[30px]">
                <b>SUN RISE</b>
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                (Pomona Đào, Mứt Xoài, Trà lài, Nước Đào, Kem muối)
              </div>
              <div className="text-[19px] text-white leading-normal text-center mt-[10px]">
                <b>50</b>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className={`${
          isMin500px ? "w-2/3 mx-auto md:w-11/12 2xl:w-3/4" : "w-full px-[30px]"
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-x-[50px]  pb-[120px]`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            OUR BEST SPECIALTIES
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[250px] sm:w-auto uppercase text-center">
              CARAMEL SALTED CREAM
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            Caramel Salted Cream thức uống trải nghiệm thú vị và đặc biệt với sự
            pha trộn của caramel ngọt ngào, cà phê Adore, và kem muối mặn tạo
            nên sự hoàn hảo trên đầu lưỡi. Với vị ngọt, mặn và hương thơm của cà
            phê hòa quyện, tất cả đều có thể làm điểm nhấn đặc biệt cho các cuộc
            hẹn hoặc buổi thư giãn với bạn bè. Hãy thử ngay và khám phá sự tinh
            tế của sự kết hợp này!
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-end">
            <Image
              src="/assets/images/CaramelSatedCream2.png"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-3/4 md:w-[calc(50%+20px)] h-full"
            />
          </div>
          <div className="absolute top-[90px] left-0 w-full h-full">
            <Image
              src="/assets/images/CaramelSatedCream1.png"
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
        } mt-[100px] grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-y-[50px] gap-x-[50px]`}
        style={{
          direction: "rtl",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#c9ab81] text-[19px] text-miniver text-center">
            Recommendations
          </div>
          <div className="mt-[15px] text-[#c9ab81] text-[31px] sm:text-[48px] font-medium leading-tight flex gap-x-4 justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[250px] sm:w-auto uppercase text-center">
              STAY CREAMY KEEP REFRESH
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
          </div>
          <div className="text-[19px] text-white leading-normal text-center mt-[20px]">
            ─ <b>PANDAN COCOMLIK</b> (Cà phê Espresso, Sữa lá dứa, Kem muối) -{" "}
            <b>50</b>
            <br />─ <b>CHOCO DOLCE</b>(Cà phê hạt Espresso, Chocolate, Sữa tươi,
            Quế) - <b>50</b>
            <br />─ <b> DALGONA COFFEE</b> (Cà phê hạt Espresso, Sữa tươi,
            Dalgona) - <b>50</b>
            <br />─ <b>OREO MINT</b> (Chocolate, Sữa tươi, Kem muối) - <b>50</b>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/StayCreamyKeepRefresh.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
            <div className="w-[200px] sm:w-auto uppercase text-center">
              VISIT BUTTERY
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.125"
              height="9.146"
            >
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881 8.576L20.562.591.244 8.576"
              ></path>
              <path
                fill="none"
                stroke="#9C7C57"
                strokeMiterlimit="10"
                d="M40.881.591L20.562 8.576.243.591"
              ></path>
            </svg>
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
              HOTLINE: 087-8929-899
            </Link>{" "}
            <br /> OPENING HOUR: 8:30 - 22:00
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
    </div>
  );
}
