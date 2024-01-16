import { useRef } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactComponent as ArrowDownIcon } from "../icons/fast-forward-arrow-down.svg";

const colorVariants = {
  "20C4A8": "bg-[#20C4A8]",
  FF8755: "bg-[#FF8755]",
  "52B3DA": "bg-[#52B3DA]",
  205285: "bg-[#205285]",
  B4171E: "bg-[#B4171E]",
};

const caseStudies = [
  {
    bgColor: "20C4A8",
    title: "Singapore Food Agency",
    subTitle: "Ideation and Concept Designer",
    desc: "The revamping project for the Singapore Food Agency (SFA) website focused on delivering a seamless user experience and a refreshed appearance, ensuring a more efficient and enjoyable digital journey for SFA's audience",
    imageUrl: "/sfa.png",
    route: "/case-study/sfa",
    buttonText: "Case Study",
  },
  {
    bgColor: "B4171E",
    title: "National Gallery Singapore",
    subTitle: "UX Researcher",
    desc: "This pro bono project for the National Gallery was driven by a mission to enhance specific low-traffic sections of their current website, with a focus on significantly improving the user experience and expanding the reach to a broader audience",
    imageUrl: "/ngs.png",
    route: "/case-study/ngs",
    buttonText: "Case Study",
    buttonLink: "https://www.behance.net/gallery/189076543/Revamping-the-National-Gallery-Singapore-Website"
  },
  // {
  //   bgColor: "FF8755",
  //   title: "Vat 19",
  //   subTitle: "UI/UX Designer",
  //   desc: "The revamping project for the Vat 19 website aimed to enhance the overall customer experience and streamline the purchasing process by addressing the current outdated design and optimizing it for a more intuitive and efficient shopping experience",
  //   imageUrl: "/vat19.png",
  //   route: "/case-study/vat19",
  // },
  {
    bgColor: "52B3DA",
    title: "World Airfares",
    subTitle: "UI Designer",
    desc: "Introducing a new blog feature for World Airfares, a premier UK-based travel agency, where you can explore a collection of captivating travel blogs offering valuable insights and inspiring destinations",
    imageUrl: "/worldair.png",
    route: "/case-study/airfares",
    buttonText: "View Design",
    buttonLink:
      "https://www.behance.net/gallery/155259469/World-Airfares-Blog-Design",
  },
  {
    bgColor: "205285",
    title: "Travel Center UK",
    subTitle: "UI Designer",
    desc: "Introducing a new blog feature for World Airfares, a premier UK-based travel agency, where you can explore a collection of captivating travel blogs offering valuable insights and inspiring destinations",
    imageUrl: "/travelcenter.png",
    route: "/case-study/trave-center",
    buttonText: "View Design",
    buttonLink: "https://www.behance.net/gallery/155351467/Travel-Center-UK",
  },
];

function CaseStudy({
  title,
  subTitle,
  desc,
  imageUrl,
  bgColor,
  route,
  buttonText,
  buttonLink,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`flex ${colorVariants[bgColor]} align-baseline sm:flex-row flex-col rounded-[20px] h-[570px]`}
    >
      <div className="sm:pl-16 sm:py-20 pt-[30px] self-center shrink-0">
        <img
          alt="linkedin"
          src={imageUrl}
          className="w-[300px] sm:w-[658px] m-auto"
        />
      </div>
      <div className="sm:ml-16 sm:mr-[60px] max-w-[730px] self-center text-white sm:text-start text-center">
        <div className="tex-xl sm:text-[58px] sm:leading-[70px] font-semibold">
          {title}
        </div>
        <div className="mt-2 sm:text-[30px] text-base sm:leading-[36px] font-normal">
          {subTitle}
        </div>
        <div className="mt-4 sm:mt-6 sm:text-[24px] text-[15px] sm:leading-[28px] font-normal px-2">
          {desc}
        </div>
        {!buttonLink ? (
          <button
            className="mt-6 p-[10px] sm:px-6 sm:py-[14px] bg-white text-[#222831] font-semibold text-base sm:text-xl rounded-md"
            onClick={() => navigate(route)}
          >
            {buttonText}
          </button>
        ) : (
          <a href={buttonLink} target="__blank">
            <button className="mt-6 p-[10px] sm:px-6 sm:py-[14px] bg-white text-[#222831] font-semibold text-base sm:text-xl rounded-md">
              {buttonText}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

function Home() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll

  return (
    <div className="overflow-scroll">
      <Header />
      <div className="sm:bg-[url('./images/portrait.png')] bg-[url('./images/portrait2.png')] bg-no-repeat bg-bottom w-screen">
        <div className="sm:-mt-10 sm:ml-20 text-center sm:text-start">
          <span className="font-sans font-bold text-[48px] leading-[110%] sm:text-[160px]">
            Kavini
            <br /> Nanayakkara
          </span>
        </div>
        <div className="">
          <div className="sm:mt-10 mt-[84px] sm:ml-20 ml-8">
            <span className="font-sans font-semibold text-[#8758FF] text-[14px] sm:text-[22px] leading-[24px]">
              Checkout my work
            </span>
          </div>
          <button
            onClick={executeScroll}
            className="rounded-full translate-y-1/2 sm:translate-y-0 p-2 sm:p-5 shadow-[0_0_8px_rgba(0,0,0,0.25)] ml-[78px] w-fit sm:ml-[140px] z-40 sm:mt-[14px] relative bg-[#F5F5F5]"
          >
            <ArrowDownIcon className="sm:h-8 sm:w-8 h-4 w-4" />
          </button>
          <div className="bg-gradient-to-r mix-blend-multiply from-[#8758FF] to-[#52B3DA] p-[30px] sm:h-[400px] sm:-mt-[34px] relative sm:pt-28 sm:pl-20">
            <div className="sm:w-[1096px] text-base sm:text-[34px] text-white sm:leading-[42px]">
              Hi, I am a dedicated UI/UX designer who brings ideas to life
              through thoughtful design, creating intuitive interfaces and
              crafting delightful experiences that help solve real-world
              problems
            </div>
            <hr className="sm:w-[1096px] mt-4 sm:mt-10 bottom-1 border" />
            <div className="flex mt-4 sm:mt-8 gap-4">
              <a href="https://www.linkedin.com/in/kavinicn" target="__blank">
                <img alt="linkedin" src="/linkedin.png" className="h-8 w-8" />
              </a>
              <a href="https://www.behance.net/kavininanayak" target="__blank">
                <img alt="behance" src="/behance.png" className="h-8 w-8" />
              </a>
            </div>
          </div>
          {/* <div className="absolute right-0 -translate-y-full z-50 w-[700px] h-[812px] "></div> */}
        </div>
      </div>
      <div
        ref={myRef}
        className="px-[30px] sm:px-20 pt-[30px] sm:pt-[72px] flex flex-col"
      >
        <div className="text-xl sm:text-[48px] text-center sm:text-start sm:leading-[58px] font-semibold mb-[30px]">
          Projects
        </div>
        <div className="flex flex-col gap-[30px] sm:gap-12">
          {caseStudies.map(
            ({
              title,
              subTitle,
              desc,
              imageUrl,
              bgColor,
              route,
              buttonText,
              buttonLink,
            }) => (
              <CaseStudy
                key={title}
                title={title}
                subTitle={subTitle}
                desc={desc}
                imageUrl={imageUrl}
                bgColor={bgColor}
                route={route}
                buttonText={buttonText}
                buttonLink={buttonLink}
              />
            )
          )}
        </div>
      </div>
      <div className="text-center mt-10 sm:mt-20">
        <a href="https://www.behance.net/kavininanayak" target="__blank">
          <button className="font-semibold text-base sm:text-2xl py-3 px-4 sm:py-[14px] sm:px-[22px] rounded-md border-2 text-[#5CB8E4] border-[#5CB8E4]">
            View more
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
