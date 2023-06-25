function SFA() {
  return (
    <div className="w-full">
      <div className="bg-[#20C4A8] flex py-10 gap-[52px] pl-20">
        <div className="flex flex-col justify-center text-white gap-4">
          <div className="text-[50px] font-semibold">
            Revamping the Singapore Food Agency (SFA) Website
          </div>
          <div className="tex-[26px]">
            A group project completed under General Assembly UX Design Immersive
            Program
          </div>
        </div>
        <div className="">
          <img alt="linkedin" src="/sfa2.png" className="w-[1110px]" />
        </div>
      </div>
      <div className="w-[1368px] m-auto">
        {/**
         * Section start
         */}
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Project Overview
          </div>
          <div className="mt-12 text-xl">
            This project is focused on identifying areas of improvement in the
            current SFA website design with the goal of enhancing the user
            experience and elevating the visual design
          </div>
          <div className="flex mt-10 justify-evenly">
            <div className="flex flex-col">
              <div className="flex flex-col mt-10 justify-evenly gap-4">
                <div className="font-semibold text-xl">Team</div>
                <div className="text-lg">
                  Melisssa Loh, Justin Chan, Wendy Hannah, Kavini Nanayakkara
                </div>
              </div>
              <div className="flex flex-col mt-10 justify-evenly gap-4">
                <div className="font-semibold text-xl">Duration</div>
                <div className="text-lg">4 Weeks</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mt-10 justify-evenly gap-4">
                <div className="font-semibold text-xl">My Role</div>
                <div className="text-lg">Ideation and Visual Designer</div>
              </div>
              <div className="flex flex-col mt-10 justify-evenly gap-4">
                <div className="font-semibold text-xl">Tools</div>
                <div className="flex gap-3">
                  <img src="/figma.png" alt="figma" />
                  <img src="/photoshop.png" alt="photoshop" />
                  <img src="/zoom.png" alt="zoom" />
                  <img src="/ow.png" alt="ow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**
         * Section end
         */}

        {/**
         * Section with image inside start
         */}
        <div className="mt-20">
          <div className="text-[#8758FF] font-semibold text-2xl border-l-2 border-[#8758FF] pl-4">
            Design Process
          </div>
          {/**
           * image inside section
           */}
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/design-process.png"
              alt="design-process"
            />
          </div>
        </div>
        {/**
         * Section with image inside end
         */}
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Project Plan{" "}
          </div>
          <div className="mt-12 text-xl">
            Our project plan included a concise timeline for each phase of the
            design process. This allowed us to allocate time efficiently and
            stay on track, ensuring successful completion of the project.
          </div>

          <div className="mt-8">
            <img className="m-auto" src="/plan.png" alt="plan" />
          </div>
        </div>
        {/**
         * Main topic in the middle
         */}
        <div className="text-3xl font-semibold text-center mt-20 from-[#8758FF] to-[#5CB8E4] bg-gradient-to-b text-transparent bg-clip-text">
          Empathize Phase
        </div>
        {/**
         * Main topic in the middle ends here
         */}
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            User Interviews
          </div>
          <div className="mt-12 text-xl">
            We conducted user interviews to gather insights about the current
            website experience of the Singapore Food Agency (SFA). In selecting
            participants, we prioritized individuals who met specific criteria
            to ensure their feedback would provide valuable insights. Our
            criteria included prioritizing participants with,
          </div>
          <ul className='mt-12 text-xl pl-20 list-["-"]'>
            <li>Direct engagement in farming and retailing operations</li>
            <li>Previous experience using the SFA website</li>
            <li>A basic level of technical proficiency</li>
          </ul>
          <div className="mt-12 text-xl">
            According to our selection criteria, we focused on{" "}
            <b>two main user groups: Farmers</b> and <b>Retailers</b>
          </div>
          <div className="mt-12 text-xl">
            Within these user groups, we carefully selected a diverse range of
            participants to ensure comprehensive insights. Our selected
            participants included,
          </div>
        </div>
      </div>
    </div>
  );
}

export default SFA;
