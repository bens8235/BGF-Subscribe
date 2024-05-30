import Image from "next/image";
import logoDice from "../../public/logoDice2.png";
import bgImg2 from "../../public/bg-3.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import Form from "./components/Form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row-reverse md:justify-start lg:gap-12">
      <Image
        src={bgImg2}
        className="h-[63vh] object-cover sm:h-[100vh] sm:w-[60%] md:w-[65%] lg:mt-[-30px]"
        alt="background-img"
      />
      <div className="h-[90vh] mt-12 flex flex-col items-center p-8 pb-0 justify-between absolute top-0 sm:static sm:pr-2 sm:pl-2 sm:h-[100vh] sm:pt-0 sm:justify-center md:w-auto lg:mt-0">
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
            <span>
              Board Games in the <span className="text-[#FF914D]">UK</span>
            </span>
          </div>
        </h1>
        <Image
          className="ml-4 sm:absolute sm:right-[17%] sm:top-[35%] md:right-[22%] lg:w-[250px] lg:h-[250px]"
          src={logoDice}
          alt="logoDice"
          width={200}
          height={200}
        />
        <div className="self-end flex flex-col items-center justify-center mt-4">
          <h2 className="text-sm font-bold">Get notified when we go live!</h2>
          <Form />
          <div className="flex gap-2">
            <Link
              href={"https://www.facebook.com/profile.php?id=61558231244720"}
              target="_blank"
            >
              <Image src={facebook} alt="Facebook" />
            </Link>
            <Link
              href={"https://www.instagram.com/boardgame.friends"}
              target="_blank"
            >
              <Image src={instagram} alt="Instagram" />
            </Link>
          </div>
          <h6 className="hidden text-xs text-center sm:block">
            © Copyrights Board Game Friends | All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
}
