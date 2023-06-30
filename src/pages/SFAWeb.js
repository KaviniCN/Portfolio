const WebSFA = () => {
  return (
    <>
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
      <div className="lg:w-[1368px] m-auto">
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
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/user-interviews.png"
              alt="user-interviews"
            />
          </div>
          <div className="mt-12 text-xl font-semibold">
            Key User Interview Questions
          </div>
          <div className="mt-12 text-xl">
            To gain a deeper understanding of the user experience with the
            Singapore Food Agency (SFA) website, we asked participants a series
            of questions during user interviews. By engaging in open and
            insightful discussions, we aimed to uncover valuable information
            that would guide our efforts in improving the website. Here are the
            key questions we asked during the interviews:
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/questions.png"
              alt="questions"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Affinity Mapping{" "}
          </div>
          <div className="mt-12 text-xl">
            We conducted affinity mapping to analyze and organize the insights
            obtained from user interviews. This process helped us identify
            recurring patterns and shared themes in the users' responses,
            providing valuable insights into their needs, preferences, and areas
            of dissatisfaction when using the website
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/user-legend.png"
              alt="user-legend"
            />
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/affinity-mapping.png"
              alt="affinity-mapping"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Usability Testing
          </div>
          <div className="mt-12 text-xl">
            During the user interviews, we also conducted usability testing with
            the current website to assess the navigation of the website,
            identify any usability issues, and gain insights into the overall
            experience and satisfaction of the users. During the testing
            sessions, participants interacted with the website and performed
            specific tasks while we observed their actions and gathered
            feedback.
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/usability-table.png"
              alt="usability-table"
            />
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/usability-testing-result.png"
              alt="usability-testing-result"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Competitive Analysis
          </div>
          <div className="mt-12 text-xl">
            As part of our competitive analysis, we conducted a feature analysis
            to evaluate the offerings from competing entities. As the Singapore
            Food Agency holds a unique position without direct competitors
            within the country, our primary focus was on examining the features
            of similar government agencies worldwide involved in food and
            agriculture
          </div>
          <div className="mt-12 text-xl font-semibold">
            Key User Interview Questions
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/competitive-analysis.png"
              alt="competitive-analysis"
            />
          </div>
        </div>
        <div className="text-3xl font-semibold text-center mt-20 from-[#8758FF] to-[#5CB8E4] bg-gradient-to-b text-transparent bg-clip-text">
          Define Phase{" "}
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            User Personas{" "}
          </div>
          <div className="mt-12 text-xl">
            To gain a comprehensive understanding of our user groups, which
            include both retailers and farmers, we developed two distinct user
            personas to represent each group's behaviors, goals, pain points,
            and frustrations. By identifying and empathizing with these
            personas, our aim was to design user-centric solutions that address
            their specific needs and enhance their experience
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/competitive-analysis.png"
              alt="competitive-analysis"
            />
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/persona1.png"
              alt="persona2"
            />
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/persona2.png"
              alt="persona1"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Problem Statements and “How might we” statements
          </div>
          <div className="mt-12 text-xl">
            After conducting a thorough analysis of our personas, we have
            formulated specific problem statements that address the key pain
            points and requirements of each user group
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/problem-statement.png"
              alt="problem-statement"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Solution Statement{" "}
          </div>
          <div className="mt-12 text-xl">
            To address the challenges faced by users like Emma and Matthew, we
            propose a multi-faceted approach that includes,
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/solution.png"
              alt="solution"
            />
          </div>
          <div className="mt-12 text-xl">
            By implementing these solutions, our aim is to streamline the
            licensing and permitting processes, making it easier for first-time
            business owners like Emma to navigate, as well as provide aspiring
            farmers like Matthew with comprehensive resources and support to
            facilitate the successful start and growth of their businesses
          </div>
        </div>
        <div className="text-3xl font-semibold text-center mt-20 from-[#8758FF] to-[#5CB8E4] bg-gradient-to-b text-transparent bg-clip-text">
          Ideate Phase{" "}
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            User flows{" "}
          </div>
          <div className="mt-12 text-xl">
            After developing the solutions, we created user flows to outline the
            step-by-step journeys for both Emma and Matthew on our new website.
            These user flows capture the specific actions, interactions, and
            decision points that each persona would encounter while navigating
            the website.
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/solution.png"
              alt="solution"
            />
          </div>
          <div className="mt-12 text-xl">
            By implementing these solutions, our aim is to streamline the
            licensing and permitting processes, making it easier for first-time
            business owners like Emma to navigate, as well as provide aspiring
            farmers like Matthew with comprehensive resources and support to
            facilitate the successful start and growth of their businesses
          </div>
          <div className="mt-12 text-xl font-semibold">
            Emma's Userflow - Apply for Food Stall License{" "}
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/emmasuserflow.png"
              alt="emmasuserflow"
            />
          </div>
          <div className="mt-12 text-xl font-semibold">
            Matthew’s Userflow - Starting an Indoor Urban Farm{" "}
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/matthewsuserflow.png"
              alt="matthewsuserflow"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Card Sorting{" "}
          </div>
          <div className="mt-12 text-xl">
            Utilizing the Optimal Workshop tool, we conducted a closed card
            sorting exercise with four participants with the aim of
            restructuring the information architecture of our website. During
            this activity, participants were presented with a set of cards
            representing different functionalities and asked to group them into
            predefined categories based on their preferences and understanding
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/cardsorting.png"
              alt="cardsorting"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Information Architecture{" "}
          </div>
          <div className="mt-12 text-xl">
            Based on a thorough analysis of the card sorting exercise results,
            we developed a revised information architecture that emphasis on the
            pathways of our primary user groups, farmers and retailers. By
            showcasing their specific journeys within the structure, we aimed to
            prioritize their needs and ensure seamless access to relevant
            information and resources.
          </div>
          <div className="mt-12">
            <img className="w-[1240px] m-auto" src="/IA.png" alt="IA" />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Mid - Fi Wireframes{" "}
          </div>
          <div className="mt-12 text-xl">
            We created mid-fi wireframes for both desktop and mobile platforms.
            Matthew's preference for the desktop as the primary platform led us
            to create a dedicated desktop wireframe flow tailored to his needs.
            Additionally, we created a mobile responsive design to ensure
            compatibility across various devices. While showcasing the mobile
            version, our focus primarily centered around Emma's flow.
          </div>
          <div className="mt-12 text-xl font-semibold">
            Desktop Wireframe Flow{" "}
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/wireframes1.png"
              alt="wireframes1"
            />
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/wireframes2.png"
              alt="wireframes2"
            />
          </div>
          <div className="mt-12 text-xl font-semibold">
            Mobile Wireframe Flow{" "}
          </div>
          <div className="mt-12">
            <img
              className="w-[1240px] m-auto"
              src="/mobilewireframes.png"
              alt="mobilewireframes"
            />
          </div>
        </div>
        <div className="text-3xl font-semibold text-center mt-20 from-[#8758FF] to-[#5CB8E4] bg-gradient-to-b text-transparent bg-clip-text">
          Design Phase{" "}
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Design Decisions{" "}
          </div>
          <div className="mt-12 text-xl font-semibold">Color Pallete </div>
          <div className="mt-12 text-xl">
            We aligned the primary color with SFA's existing brand color to
            maintain a consistent visual identity. For the secondary colors, we
            carefully selected new colors that harmonize and complement the
            primary color. This combination of familiar and fresh colors creates
            a visually appealing design that reflects SFA's branding while
            allowing for versatility in various interface components
          </div>
          <div className="mt-12">
            <img
              className="w-[1145px] m-auto"
              src="/colorpallete.png"
              alt="colorpallete"
            />
          </div>
          <div className="mt-12 text-xl font-semibold">Typography</div>
          <div className="mt-12 text-xl">
            We chose these two key typefaces, Hepta Slab for headings and
            Poppins for content, to create a harmonious and visually engaging
            typography system. Hepta Slab adds a touch of modernity and impact
            to our headings, while Poppins ensures clear legibility and
            readability for the body content
          </div>
          <div className="mt-12">
            <img
              className="w-[560px] m-auto"
              src="/typography.png"
              alt="typography"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Hi - Fi Prototype{" "}
          </div>
        </div>
        <div className="mt-20 flex gap-10">
          <div className="basis-3/4">
            <div className="font-semibold text-xl mb-10 text-center">
              Desktop
            </div>
            <div>
              <video
                src="/desktop.mov"
                type="video/mp4"
                width="auto"
                height="auto"
                autoplay
                muted
                playsinline
              />
            </div>
            <div className="mt-10 text-center">
              <a
                className="text-center text-blue-700 underline"
                href="https://www.figma.com/proto/kGBUXaUW3yZdyNi66lMB8g/SFA-Prototype?page-id=0%3A1&type=design&node-id=173-8781&viewport=7105%2C1161%2C0.09&scaling=scale-down&starting-point-node-id=173%3A8781&mode=design&t=wvaoGwFdup8VdlD6-1"
              >
                Desktop prototype link
              </a>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="font-semibold text-xl mb-10 text-center">
              Mobile
            </div>
            <div>
              <video
                src="/mobile.mov"
                type="video/mp4"
                width="300"
                height="auto"
                autoplay
                muted
                playsinline
              />
            </div>
            <div className="text-center mt-10">
              <a
                className="text-center text-blue-700 underline"
                href="https://www.figma.com/proto/NiApASoXjo2NWUpRLIIRlh/SFA-Mobile-Prototype?page-id=0%3A1&type=design&node-id=1-730&viewport=457%2C439%2C0.19&t=4XAPMH4CdEP8ahYZ-1&scaling=scale-down&starting-point-node-id=1%3A355&mode=design"
              >
                Mobile prototype link
              </a>
            </div>
          </div>
        </div>
        <div className="text-3xl font-semibold text-center mt-20 from-[#8758FF] to-[#5CB8E4] bg-gradient-to-b text-transparent bg-clip-text">
          Test Phase{" "}
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Usability Testing on Mid-Fi Design{" "}
          </div>
          <div className="mt-12 text-xl font-semibold">Purpose</div>
          <ul className='mt-12 text-xl ml-20 list-["-"]'>
            <li>
              To identify any usability issues and gather feedback from
              participants to improve the user experience
            </li>
          </ul>
          <div className="mt-12 text-xl font-semibold">Methodology</div>
          <ul className='mt-12 text-xl ml-20 list-["-"]'>
            <li>Moderated remote testing</li>
            <li>
              Each participant will be asked to complete a series of tasks while
              being observed by a moderator
            </li>
          </ul>
          <div className="mt-12 text-xl font-semibold">Participants</div>
          <ul className='mt-12 text-xl ml-20 list-["-"]'>
            <li>6 participants from ages 30 to 65 </li>
            <li>
              Varying levels of experience in small business ownership and urban
              farming
            </li>
            <li>
              Selected based on their interest in entrepreneurship and urban
              farming
            </li>
          </ul>
          <div className="mt-12 text-xl font-semibold">Testing Results</div>
          <div className="mt-12">
            <img
              className="w-[1368px] m-auto"
              src="/testingresults.png"
              alt="testingresults"
            />
          </div>
          <div className="mt-12">
            <img
              className="w-[1184px] m-auto"
              src="/testingfeedback.png"
              alt="testingfeedback"
            />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            A/B Testing{" "}
          </div>
          <div className="mt-12 text-xl">
            We conducted an A/B test to analyze and compare the performance of 2
            variations of the landing page. The goal was to determine which
            version offers the best user experience and provides an easier way
            for users to find relevant information.
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            System Usability Scale (SUS) Test For new Design{" "}
          </div>
          <div className="mt-12 text-xl">
            We conducted a System Usability Score (SUS) test with a sample of 6
            users to evaluate the usability of the SFA website. Participants
            were asked to rate their level of agreement with the following
            statements using a scale from 1 (Strongly Disagree) to 5 (Strongly
            Agree):
          </div>
          <div className="mt-12">
            <img className="w-[1368px] m-auto" src="/SUS1.png" alt="SUS1" />
          </div>
          <div className="mt-12">
            <img
              className="w-[1368px] m-auto"
              src="/SUSResults.png"
              alt="SUSResults"
            />
          </div>
          <div className="mt-12">
            <img className="w-[1184px] m-auto" src="/SUS2.png" alt="SUS2" />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Next Steps{" "}
          </div>
          <div className="mt-12">
            <img className="w-[1184px] m-auto" src="/SUS3.png" alt="SUS3" />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-[#8758FF] text-2xl font-semibold border-l-2 border-[#8758FF] pl-4">
            Reflections{" "}
          </div>
          <div className="mt-12 text-xl font-semibold text-center">
            "None of us is as smart as all of us." - Ken Blanchard
          </div>

          <div className="mt-12">
            <img
              className="w-[1184px] m-auto"
              src="/reflections.png"
              alt="reflections"
            />
          </div>
          <div className="mt-12 text-[#8758FF] text-center text-2xl font-semibold">
            And That’s a Wrap. Thank You For Your Time :){" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebSFA;
