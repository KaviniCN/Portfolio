import "./App.css";
import { ReactComponent as ArrowDownIcon } from "./icons/fast-forward-arrow-down.svg";

const colorVariants = {
  "20C4A8": "bg-[#20C4A8]",
  FF8755: "bg-[#FF8755]",
  "52B3DA": "bg-[#52B3DA]",
  205285: "bg-[#205285]",
};

const caseStudies = [
  {
    bgColor: "20C4A8",
    title: "Singapore Food Agency",
    subTitle: "Ideation and Concept Designer",
    desc: "The revamping project for the Singapore Food Agency (SFA) website focused on delivering a seamless user experience and a refreshed appearance, ensuring a more efficient and enjoyable digital journey for SFA's audience",
    imageUrl: "/sfa.png",
  },
  {
    bgColor: "FF8755",
    title: "Vat 19",
    subTitle: "UI/UX Designer",
    desc: "The revamping project for the Vat 19 website aimed to enhance the overall customer experience and streamline the purchasing process by addressing the current outdated design and optimizing it for a more intuitive and efficient shopping experience",
    imageUrl: "/vat19.png",
  },
  {
    bgColor: "52B3DA",
    title: "World Airfares",
    subTitle: "UI Designer",
    desc: "Introducing a new blog feature for World Airfares, a premier UK-based travel agency, where you can explore a collection of captivating travel blogs offering valuable insights and inspiring destinations",
    imageUrl: "/worldair.png",
  },
  {
    bgColor: "205285",
    title: "Travel Center UK",
    subTitle: "UI Designer",
    desc: "Introducing a new blog feature for World Airfares, a premier UK-based travel agency, where you can explore a collection of captivating travel blogs offering valuable insights and inspiring destinations",
    imageUrl: "/travelcenter.png",
  },
];

function CaseStudy({ title, subTitle, desc, imageUrl, bgColor }) {
  return (
    <div className={`flex ${colorVariants[bgColor]} rounded-[20px]`}>
      <div className="pl-16 py-20">
        <img alt="linkedin" src={imageUrl} className="w-[658px]" />
      </div>
      <div className="ml-16 max-w-[730px] text-white pb-20">
        <div className="mt-28 text-[58px] leading-[70px] font-semibold">
          {title}
        </div>
        <div className="mt-2 text-[30px] leading-[36px] font-normal">
          {subTitle}
        </div>
        <div className="mt-6 text-[24px] leading-[28px] font-normal">
          {desc}
        </div>
        <button className="mt-6 px-6 py-[14px] bg-white text-[#222831] font-semibold text-xl rounded-md">
          Case Study
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="">
      <header className="">
        <nav className="text-cool-gray-100">
          <div className="flex font-sans font-normal text-base justify-end mt-10 gap-12 pr-20">
            <a href="/" className="mr-4">
              Work
            </a>
            <a href="/" className="mr-4">
              About
            </a>
            <a href="/about" className="mr-4">
              Resume
            </a>
          </div>
        </nav>
      </header>
      <div className="-mt-10 ml-20">
        <span className="font-sans font-bold text-[160px] leading-[176px]">
          Kavini
          <br /> Nanayakkara
        </span>
      </div>
      <div className="mt-10 ml-20">
        <span className="font-sans font-semibold text-[#8758FF] text-[22px] leading-[24px]">
          Checkout my work
        </span>
      </div>
      <div>
        <div className="rounded-full p-5 shadow-[0_0_8px_rgba(0,0,0,0.25)] w-fit ml-[140px] z-40 mt-[14px] relative bg-[#F5F5F5]">
          <ArrowDownIcon className="h-8 w-8" />
        </div>
        <div className="bg-gradient-to-r from-[#8758FF] to-[#52B3DA] h-[400px] z-30 -mt-[34px] relative pt-28 pl-20">
          <div className="w-[1096px] text-[34px] text-white leading-[42px]">
            Hi, I am a dedicated UI/UX designer who brings ideas to life through
            thoughtful design, creating intuitive interfaces and crafting
            delightful experiences that help solve real-world problems
          </div>
          <hr className="w-[1096px] mt-10 bottom-1 border" />
          <div className="flex mt-8 gap-4">
            <img alt="linkedin" src="/linkedin.png" className="h-8 w-8" />
            <img alt="behance" src="/behance.png" className="h-8 w-8" />
          </div>
        </div>
        <div className="absolute right-0 -translate-y-full z-50 w-[700px] h-[812px] bg-[url('./images/portrait.png')] bg-blend-multiply"></div>
      </div>
      <div className="px-20 pt-[72px] flex flex-col gap-12">
        <div className="text-[48px] leading-[58px] font-semibold">Projects</div>

        {caseStudies.map(({ title, subTitle, desc, imageUrl, bgColor }) => (
          <CaseStudy
            key={title}
            title={title}
            subTitle={subTitle}
            desc={desc}
            imageUrl={imageUrl}
            bgColor={bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
