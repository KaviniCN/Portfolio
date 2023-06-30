import Header from "../components/Header";

function About() {
  return (
    <div className="">
      <Header />
      <div className="text-[50px] font-semibold text-center">About Me</div>
      <div className="mx-auto m-[220px] px-12 w-[1280px] text-white text-2xl bg-gradient-to-r from-[#8758FF] to-[#52B3DA]">
        <img
          src="/about-me.png"
          alt="about-me"
          className="w-[280px] m-auto -translate-y-1/2"
        />
        <div className="mx-auto w-full -m-[110px] pb-[60px]">
        Hi there! I am a UI/UX designer with a Bachelor's degree in Information
          Systems from University of Colombo School of Computing. Initially, I
          followed the path of Software Engineering  to enhance my practical skills
          and expand my technical expertise. During my time in the Software Engineering
          role, I discovered my passion for design and realized that it was the area
          where I could truly make a meaningful impact. Motivated by this realization,
          I took the initiative to learn UI/UX fundamentals through online courses,
          sharpened my skills in crafting visually appealing and user-centered designs.
          <br />
          <br /> With my newfound knowledge, I secured a position as a UI/UX designer
          where I specialized in visual design and gained valuable experience over the
          course of 1 year. I was eager to expand my expertise across all aspects of
          UI/UX design. To achieve this goal, I enrolled in the General Assembly UX
          Design Immersive program, which provided me with hands-on experience of
          the end-to-end journey in UI/UX design <br />
          <br />
          In my previous role, I have successfully designed and launched products
          that have received positive user feedback and exceeded business goals.
          I'm always seeking new challenges and opportunities to learn and develop
          my skills in UI/UX design. If you're interested in collaborating or have
          any design-related inquiries, please don't hesitate to reach out to me at
          kavininanayakkara@gmail.com
          <br />
          <br /> Let's create exceptional experiences together!
        </div>
      </div>
    </div>
  );
}

export default About;
