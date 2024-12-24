import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { homeSlides, bannerSm } from "../constant";

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 4000,
    };
// let slidera =   $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,

// });
    return (
        // <>


        //     <div id="default-carousel" class="relative w-full" data-carousel="slide">
        //         <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
        //                 <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-womenscorner1.jpg&w=1920&q=75" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //             </div>
        //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
        //                 <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F20dec24-crsl-nc-newarriavls.jpg&w=1920&q=75" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //             </div>
        //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
        //                 <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F20dec24-crsl-nc-newarriavls.jpg&w=1920&q=75" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //             </div>
        //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
        //                 <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F20dec24-crsl-nc-newarriavls.jpg&w=1920&q=75" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //             </div>
        //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
        //                 <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F20dec24-crsl-nc-newarriavls.jpg&w=1920&q=75" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //             </div>
        //         </div>

        //         <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        //             <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        //         </div>

        //         <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        //             <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //                 <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        //                 </svg>
        //                 <span class="sr-only">Previous</span>
        //             </span>
        //         </button>
        //         <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        //             <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //                 <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        //                 </svg>
        //                 <span class="sr-only">Next</span>
        //             </span>
        //         </button>
        //     </div>
        //     </>


        <>
            <div className="w-full ">
                <Slider {...settings} className="mt-10">
                    {homeSlides.map((item, index) => (
                        <div key="index" className="">
                            <img className="w-full h-[250px] rounded-md " src={item.img} alt={item.label} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 mt-10">
              {bannerSm.map((item, index) => (
                <div key={index} className="m-2" >
                    <a href={item.link}> <img src={item.img} alt={item.label} /></a>
                  </div>
              ))}
            </div>







        </>

    )

}

export default Hero;