/* eslint-disable react/no-unescaped-entities */
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "VibeX",
    imgSrc: "project-imgs/vibex.jpg",
    code: "https://github.com/ahmediblao1/VibeX",
    projectLink: "https://vibe-x-roan.vercel.app/",
    tech: ["React js", "Tailwind", "Redux", "RapidAPI"],
    description:
      "advanced music player . With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more..",
    modalContent: (
      <>
        <p>
          Vibex is an advanced music player app built using a powerful stack of technologies to deliver an unparalleled music listening experience. Developed with React.js, Tailwind CSS, Redux, and integrated with the expansive capabilities of RapidAPI, Vibex is a testament to the fusion of cutting-edge frameworks and APIs for a seamless and feature-rich music player.
        </p>
        <p>
          Crafted with precision in React.js, the app ensures a responsive and dynamic user interface. Tailwind CSS adds a touch of modern styling, providing an aesthetic and user-friendly design. Redux, as the state management library, enables efficient data flow, ensuring a smooth and interactive user experience.
        </p>
        <p>
          Vibex leverages the power of RapidAPI to enrich its features, allowing users to seamlessly explore and enjoy a vast collection of music. From real-time lyrics display to song exploration and global top charts, the integration with RapidAPI enhances the app's functionality and data offerings.
        </p>
        <p>
          Immerse yourself in the world of Vibex, where React.js, Tailwind CSS, Redux, and RapidAPI converge to create an advanced music player that goes beyond the ordinary.
        </p>
      </>


    ),
  },
  {
    title: "Cinemy",
    imgSrc: "project-imgs/cinemy.jpg",
    code: "https://github.com/ahmediblao1/Cinemy",
    projectLink: "https://ahmediblao1.github.io/Cinemy/main.html",
    tech: ["Node", "HTML", "Postgres", "CSS", "js", "Redis"],
    description:
      "Cinemy is a fully responsive movies website, Responsive for all devices).",
    modalContent: (
      <>
        <p>
          because every movie has a story to tell, and we re here to bring them to you, one click at a time.
        </p>
        <p>
          Our movie website is your portal to the magical world of film,
        </p>
        <p>
          where storytelling transcends boundaries and emotions are captured frame by frame.
        </p>
        <p>
          Dive into a treasure trove of blockbusters, indie gems, and timeless classics.
          Immerse yourself in a reel adventure, explore the stars, and discover the unseen {":)"}
        </p>
        <p>
          Get ready for an unforgettable journey through the art of storytelling – because every movie has a story to tell,
          and we are here to bring them to you, one click at a time.        </p>

      </>
    ),
  },
  {
    title: "Ridezy",
    imgSrc: "project-imgs/web1.jpg",
    code: "https://github.com/ahmediblao1/Ridezy",
    projectLink: "https://ahmediblao1.github.io/Ridezy/",
    tech: ["js", "html", "css"],
    description:
      "Ridezy!  designed to help you find and rent the perfect car for your needs. With a wide variety of vehicles to choose from",
    modalContent: (
      <>
        <p>
          At Ridezy, we&apos;re committed to providing you with the best rental car experience possible.
          Whether you&apos;re renting a car for business or pleasure,
        </p>
        <p>
          we understand that your time is valuable and your budget is important.
          That&apos;s why we offer a wide range of rental options to fit your needs,
          from short-term rentals for weekend getaways to long-term rentals for extended trips.
        </p>
        <p>
          At CarRent, we take pride in our fleet of rental cars.
          All of our vehicles are regularly maintained and inspected to ensure they&apos;re in top condition.
          Whether you&apos;re looking for a compact car for city driving or a spacious SUV for a family road trip,



        </p>
        <p>
          we have the perfect vehicle for you.
          You can view our selection of rental cars on our website or visit one of our locations to see them in person.
        </p>
      </>
    ),
  },
  {
    title: "Rebirth",
    imgSrc: "project-imgs/web2.jpg",
    code: "https://github.com/ahmediblao1/Rebirth",
    projectLink: "https://ahmediblao1.github.io/Rebirth/",
    tech: ["js", "html", "css"],
    description:
      "Rebirth designed to help you find the healthcare services you need and connect with healthcare professionals to improve your health .",
    modalContent: (
      <>
        <p>At Rebirth, we re dedicated to providing our patients with the highest quality care possible.


        </p>
        <p>
          Our team of experienced and skilled healthcare professionals is
          committed to ensuring that you receive the personalized attention and
          treatment you need to achieve optimal health and wellbeing.
        </p>
        <p>We offer a wide range of services, including general medical care,
          specialized treatments,
          and preventative care options. Our state-of-the-art facilities are equipped with the latest
          technology and equipment, allowing us to provide accurate diagnoses and effective treatments.
          {":)"}</p>
        <p>
          In addition to our medical services, we also offer a variety of wellness programs designed to
          promote healthy living and improve overall wellbeing. From nutrition counseling to fitness classes,


        </p>
        <p>
          our wellness experts are here to help you achieve your health goals and live your best life.

        </p>
      </>
    ),
  },
];
