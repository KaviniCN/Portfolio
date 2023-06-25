import Header from "../components/Header";

function About() {
  return (
    <div className="">
      <Header />
      <div className="text-[50px] font-semibold text-center">About Me </div>
      <div className="mx-auto m-[220px] px-12 w-[1280px] text-white text-2xl bg-gradient-to-r from-[#8758FF] to-[#52B3DA]">
        <img
          src="/about-me.png"
          alt="about-me"
          className="w-[280px] m-auto -translate-y-1/2"
        />
        <div className="mx-auto w-full -m-[110px] pb-[60px]">
          Hi there! I'm Kavini, a skilled UI/UX designer with 1+ years of
          experience in creating engaging digital experiences. My expertise
          includes user research, wireframing, prototyping, usability testing
          and have a deep understanding of how design can enhance user
          experiences and drive business goals.
          <br />
          <br /> I'm passionate about designing solutions that make a real
          impact, and I love collaborating with cross-functional teams to bring
          ideas to life. I thrive in fast-paced environments and am always
          looking for new challenges and opportunities to learn and grow. <br />
          <br />
          In my previous roles, I have successfully designed and launched
          products that have received positive user feedback and exceeded
          business goals. I'm always seeking new challenges and opportunities to
          grow and learn, and I'm excited to leverage my skills to create
          impactful solutions for your organization.
          <br />
          <br /> Outside of work, I enjoy cooking, travelling and watching
          movies. If you're looking for a passionate UI/UX designer who is
          dedicated to creating impactful solutions, let's connect!
          <br />
          <br /> I am currently seeking new opportunities to contribute to
          meaningful projects and further develop my skills in UI/UX design. If
          you're interested in collaborating or have any design-related
          inquiries, please don't hesitate to reach out to me at
          kavininanayakkara@gmail.com.
          <br />
          <br /> Let's create exceptional experiences together!
        </div>
      </div>
    </div>
  );
}

export default About;
