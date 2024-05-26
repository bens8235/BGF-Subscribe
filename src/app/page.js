import Image from "next/image";
import logoDice from "../../public/logoDice2.png";
import bgImg2 from "../../public/bg-3.png";

import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row-reverse md:justify-start lg:gap-12">
      <Image
        src={bgImg2}
        className="h-[68vh] object-cover sm:h-[100vh] sm:w-[60%] md:w-[65%]"
        alt="background-img"
      />
      <div className="h-[90vh] mt-6 flex flex-col items-center p-8 pb-0 justify-between absolute top-0 sm:static sm:pr-2 sm:pl-2 sm:h-[100vh] sm:pt-0 sm:justify-center md:w-auto">
        <h1 className="text-white font-medium text-[21px] pt-4 text-center sm:text-black sm:mb-10 lg:text-[24px]">
          <div className="flex flex-col gap-1">
            <span>Make</span> {""}
            <span>
              <span className="text-[#FF914D]">B</span>oard{" "}
              <span className="text-[#FF914D]">G</span>ame{" "}
              <span className="text-[#FF914D]">F</span>riends
            </span>{" "}
            <span>the go-to Place to</span> {""}
            <span className="text-[#FF914D]">Buy and Sell your </span>
            <span>Board Games</span>
          </div>
        </h1>
        <Image
          className="ml-4 sm:absolute sm:right-[17%] sm:top-[35%] md:right-[22%] lg:w-[200px] lg:h-[200px]"
          src={logoDice}
          alt="logoDice"
          width={150}
          height={150}
        />
        <div className="self-end flex flex-col items-center justify-center">
          <h2 className="text-sm font-bold">Get notified when we go live!</h2>
          <Form />
          <h6 className="hidden text-xs text-center sm:block">
            © Copyrights Board Game Friends | All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
}
