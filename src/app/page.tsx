import Hero from "../components/Hero";
import Review from "@/components/ui/Review";
import Rom from "/public/rom.png";
import Emily from "/public/emily.png";
import SquigglyLine from "@/components/ui/SquigglyLine";
import TeaSpill from "/public/tea-spill.png";
import Head from "next/head";
import Timeline from "@/components/Timeline";
import TimelinePic from "@/components/TimelinePic";
import AboutSection from "@/components/AboutSection";
import ProjectCard from "@/components/ProjectCard";
import RockingPicture from "@/components/ui/RockingPicture";
import OffRoadFunFinder from "/public/offRaodFunFinder.png";
import Oberweis from "../../public/OberweisDairy.png";
import FurryTails from "../../public/furry-tails.png";
const events = [
  {
    title: "Jr Developer",
    description:
      "Buckle up, folks! I'm currently on an epic quest, diving into another Boot camp to level up my Django skills. It's a collaborative adventure, working side by side with other coding heroes at the Code Institutes Program. Together, we're crafting digital magic and conquering coding challenges!",
    date: "March 2024 - present",
  },
  {
    title: "Boot camp Student",
    description:
      "I embarked on a thrilling 10-week journey with Iungo Solutions, where I acquired the foundational skills of a Software Development warrior. With determination and a sprinkle of geekiness, I successfully completed the course with a distinction. It was an epic achievement!",
    date: "January 2024 - March 2024",
  },
  {
    title: "Founder of Bear Digital Studios",
    description:
      "I ventured into the realm of Hodgesnet in Swindon as a web developer, ready to weave digital wonders. While I enjoyed the work, it became clear that the manager's priorities were shifting from web development to social media and advertising. Sensing that I was slowly being phased out, I made the bold decision to leave and embark on my own entrepreneurial quest.",
    date: "May 2023 - November 2023",
  },
  {
    title: "Web Developer at Hodgesnet",
    description:
      "After completing my training at the Joy of Coding Academy, I was summoned to join the ranks of Joy Tech as a web developer. There, I embarked on a series of noble projects, including crafting websites for a local charity and a local business. I also delved into internal projects, such as developing a CRM system and a project management system. As a true mentor, I shared my knowledge with others, helping them grow in their coding journey.",
    date: "March 2023 - May 2023",
  },
  {
    title: "Web Developer at Joy Tech",
    description:
      "After completing my training at the Joy of Coding Academy, I was summoned to join the ranks of Joy Tech as a web developer. There, I embarked on a series of noble projects, including crafting websites for a local charity and a local business. I also delved into internal projects, such as developing a CRM system and a project management system. As a true mentor, I shared my knowledge with others, helping them grow in their coding ",
    date: "November 2021 - March 2023",
  },
  {
    title: "Student at the Joy of Coding Academy",
    description:
      "For six months, I immersed myself in the sacred halls of the Joy of Coding Academy, absorbing the wisdom of coding sages and honing my skills in the art of web development with a focus on NextJS Tailwind Python.",
    date: "May 2021 - November 2021",
  },
  {
    title: "Student at IT Career Switch",
    description:
      "During the era of Covid, while serving as an ESL Teacher, I embarked on a parallel quest with IT Career Switch. In my free time, I delved into the realms of frontend development, mastering the arts of HTML, CSS, Bootstrap, JavaScript, and React.",
    date: "January 2021 - May 2021",
  },
  {
    title: "Second Language Teacher",
    description:
      "With a thirst for knowledge and a desire to share it, I completed a TEFL course and took on the role of an ESL Teacher online, imparting language skills across various platforms.",
    date: "December 2020 - March 2023",
  },
  {
    title: "Police Officer for the Foreign Office",
    description:
      "As a guardian of peace, I served as a Police Officer for the Foreign Office in the UK, stationed on the enchanting island of St Helena. With unwavering dedication, I maintained the Queen's peace, protected life and crown property, and engaged in community projects. My main areas of responsibility involved investigating sensitive crimes and processing digital evidence. During my time in the Police force, I completed my Pace Training, passed the Sergeant's exam, and was awarded a medal for meritorious service.",
    date: "December 2009 - September 2020",
  },
  {
    title: "Anglican Minister",
    description:
      "My path led me to the sacred realm of the Church, where I began as an apprentice and rose to become an assistant minister. I devoted myself to working with the Church of England in South Africa, guiding students on the Howard Campus in Durban. I led Bible studies, conducted one-on-one study groups, and engaged in administration and outreach. After a crisis of faith, I embarked on a new chapter, serving on the Island of St Helena alongside my father as an assistant Minister, focusing on youth work and community projects. During this time, I completed my Diploma in Biblical Theology.",
    date: "February 2007 - September 2009",
  },
  {
    title: "Gold Smith",
    description:
      "At the tender age of 16, I ventured into the world of craftsmanship as a Goldsmith apprentice. I honed my skills in repair and restoration for the first year before gradually transitioning into designing and developing pieces for clients. With dedication and artistry, I earned my pass from the Metalworkers Union of South Africa.",
    date: "February 2003 - September 2007",
  },
];
const projectsData = [
  {
    title: "Off Road Fun Finder",
    description:
      "Off Road Fun Finder was my first taste of the real world coding adventure! I jumped headfirst into the Joy of Coding, flexing my frontend muscles by crafting the sign-in forms, product info, and even the admin panel for updating the site. But that's not all – I got to flex my creative chops by designing the logo and collaborating with other developers who were way ahead of me on the journey. It was a wild ride, and Off Road Fun Finder will always hold a special place in my coding heart!",
    technologies: [
      "React",
      "React Router",
      "MUI",
      "Google Maps",
      "Django",
      "Typescript",
    ],
    image: OffRoadFunFinder,
    isCollaborative: true,
    url: "https://offroadfunfinder.com/",
  },
  {
    title: "Oberweis Dairy",
    description:
      "This project was a wild ride that came my way through a good buddy, and boy, was it a thrill! I got to dive deep into the frontend waters, crafting the site's interface and the admin panel. But that's not all – I also flexed my SEO muscles and optimized the site for Google Analytics, ensuring maximum visibility.Of course, I made sure the site loaded like a dream and looked sharp on those tiny mobile screens too! Now, I won't take all the credit for the stunning visuals – the design wizards had that covered. But being a part of shaping this project from the ground up was an absolute blast.",
    technologies: [
      "React",
      "React Router",
      "Redux",
      "BootStrap",
      "Google Analytics",
      "ExpressJS",
    ],
    image: Oberweis,
    isCollaborative: false,
    url: "https://www.oberweis.com/",
  },
  {
    title: "Furry Tails Pet Grooming",
    description:
      "Buckle up, because this one was a wild ride! I had to take on the challenge of duplicating a WordPress website that had been their trusty steed for years. But here's the kicker – they wanted to keep the same assets and look, which meant I had to get crafty. Let me tell you, this project was a true test of my communication skills. It involved a lot of back-and-forth, but hey, that's all part of the game! And you know what? I wouldn't have had it any other way because it taught me the invaluable lesson of just how crucial clear communication is in our line of work. But that's not all, folks! This project also gave me the chance to be a part of the awesome team at Furry Tails, and let me tell you, it was an absolute blast.",
    technologies: ["React", "Bootstrap", "Sanity", "React Router"],
    image: FurryTails,
    isCollaborative: false,
    url: "https://www.furrytailspetgrooming.com/",
  },
  // Add more project objects as needed
];
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon-512x512.png"
          sizes="512x512"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-256x256.png"
          sizes="256x256"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-128x128.png"
          sizes="128x128"
          type="image/png"
        />
      </Head>
      <div className="text-brandCol1">
        <div className="home-container">
          <section className="home-section">
            <div className="p2">
              <Hero />
            </div>
            <div className=" justify-center py-[4rem] hidden lg:flex">
              <div className=" w-[80%] h-[5px] bg-brandCol1 rounded-sm" />
            </div>

            <section className="graph-paper pt-[4rem] -mb-[2.1rem]">
              <p className="text-center font-open-dyslexic-alta-bold text-xl text-brandCol6">
                Guess who spilled the Tea. Come and Hear what Emily said about
                me...
              </p>
              <div className="flex justify-center items-center py-[4rem]">
                <Review
                  name="Dr Emily Hill"
                  title="Founder of the Joy of Coding Academy"
                  picture={Emily}
                  content="Arthur Beckett excels as a Frontend Web Developer. His work ethic and attention to detail produce high-quality websites with consistent user interfaces. Arthur's expertise with style sheets is particularly impressive. Beyond technical skills, he collaborates effectively and supports colleagues. Arthur's dedication, talent, and team-oriented approach make him a valuable asset. He would be a strong addition to any web development team."
                  linkedinUrl="https://www.linkedin.com/in/emily-hill-6921b92/"
                />
              </div>

              <div className="flex justify-center">
                <RockingPicture imageUrl={TeaSpill} altText="tea spill" />
              </div>
              <SquigglyLine color="#0B08C6" />
            </section>
          </section>
          {/* Section three About me */}
          <section className="home-section bg-brandCol1 shadow-lg border-t-4 border-b-4 border-black items-center">
            <div className=" justify-center py-[4rem] hidden lg:flex">
              <div className=" w-[80%] h-[5px] bg-brandCol2 rounded-sm" />
            </div>
            <div>
              <AboutSection />
            </div>
            <div className=" justify-center py-[4rem] hidden lg:flex">
              <div className=" w-[80%] h-[5px] bg-brandCol2 rounded-sm" />
            </div>
          </section>
          <section className="home-section dot-grid">
            {/* Section two Timeline and Review */}
            <div>
              <div className="container mx-auto">
                <Timeline events={events} />
                <p className="text-brandCol6 text-center font-open-dyslexic-alta-bold text-xl">
                  Guess who dropped the ball! <br />
                  Come and hear Romualdo tell it all...
                </p>
                <div className="flex justify-center items-center pt-[4rem]">
                  <Review
                    name="Romualdo Duarte"
                    title="Mobile Developer & Software Engineer"
                    picture={Rom}
                    content="Art's career shift really highlights how dedicated he is to growing and learning. I mean, the way he just gets these super complex ideas and then turns them into something amazing is just mind-blowing. He brings so much passion and creativity to everything he does, which totally boosts his technical skills. Watching him grow and evolve has been such a privilege. He's not just a great developer; he's also one of those people who just inspire everyone around him. Honestly, any team would be lucky to have him."
                    linkedinUrl="https://www.linkedin.com/in/romualdo-duarte/"
                  />
                </div>

                <div className="-mb-[4rem]">
                  <TimelinePic />
                </div>
                <SquigglyLine color="#0B08C6" />
              </div>
            </div>
          </section>

          <section className="home-section graph-paper border-t border-brandCol2">
            <div className="flex justify-center items-center">
              <ProjectCard projects={projectsData} />
            </div>
          </section>
          <footer className="bg-brandCol2 text-brandCol1 py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left font-open-dyslexic-bold">
                  <p>
                    &copy; {new Date().getFullYear()} Made by Art Beckett. All
                    rights reserved.
                  </p>
                </div>
                <div className="text-center md:text-right mt-4 md:mt-0 font-open-dyslexic-bold">
                  <p>Contact:</p>
                  <p>Email: art.b.beckett@gmail.com</p>
                  <p>Phone: +44 7925 578819</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
