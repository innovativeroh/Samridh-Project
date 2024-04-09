import Link from "next/link";
import React from "react";
import Image from "next/image";
import Author from "@/../public/SAM.png";
import Left_Cur from "@/../public/Left_Current_png.png";
import Right_Cur from "@/../public/Right_Current_png.png";
import AE_Icon from "@/../public/After_Effects_Logo.png";
import PP_Icon from "@/../public/Premiere_Pro_Logo.png";
const HeroComponent = () => {
  return (
    <div className="w-full p-10 lg:h-[640px] pt-10" id="gradientHero">
      <div className="max-w-[1300px] m-auto">
        <div className="flex flex-wrap items-center justify-center lg:gap-[100px] flex-col gap-10px lg:flex-row">
          <div className="flex-[1]">
            <p className="font-Exo text-white font-light">SAMRIDH</p>
            <hr className="w-[100px] h-[1px] border-none mt-2" id="gradient" />
            <h1 className="text-white font-Exo font-bold lg:mt-10 uppercase text-2xl lg:text-[70px] leading-[75px]">
              Professional video editor
            </h1>
            <p className="font-Exo text-white font-light text-xl lg:mt-10 mb-10">
              Making your videos look more cool.
            </p>
            <Link
              href="#"
              className="bg-[#6F00A9] border-[1px] border-[#6F00A9] text-white font-semibold text-xl py-2 px-10 font-Exo"
            >
              LETS TALK
            </Link>
          </div>
          <div className="flex-[1] relative h-full w-full">
            <center>
              <Image
                alt="Author"
                width={500}
                height={1000}
                src={Author}
                className="w-[60%] mt-[50px] lg:mt-0 lg:absolute lg:top-[-22px] lg:right-0 lg:-translate-x-1/2 z-[2]"
              />
            </center>
            <Image
              alt="Author"
              width={500}
              height={1000}
              src={Left_Cur}
              className="w-[60%] absolute top-[-58px] left-[30px] z-[1] -translate-x-1/2 hidden lg:block"
            />
            <Image
              alt="Author"
              width={500}
              height={1000}
              src={Right_Cur}
              className="w-[60%] absolute top-[-58px] right-[-30px] hidden lg:block"
            />
            <Image
              alt="Author"
              width={500}
              height={1000}
              src={AE_Icon}
              className="w-[20%] absolute top-[150px] right-[-10px] hidden lg:block"
            />
            <Image
              alt="Author"
              width={500}
              height={1000}
              src={PP_Icon}
              className="w-[20%] absolute top-[150px] left-[-20px] z-[1] -translate-x-1/2 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
