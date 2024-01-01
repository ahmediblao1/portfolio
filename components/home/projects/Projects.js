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
    title: "Paint.app",
    imgSrc: ".jpg",
    code: "https://github.com/ahmediblao1/VibeX",
    projectLink: "vibe-x-roan.vercel.app",
    tech: ["Flutter", "MUI", "Python", "FastAPI"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
   {
    title: "Cinemy",
    imgSrc: "project-imgs/cinemy.jpg",
    code: "https://github.com/ahmediblao1/Cinemy",
    projectLink: "https://ahmediblao1.github.io/Cinemy/main.html",
    tech: ["Node", "HTML", "Postgres", "CSS" , "js", "Redis"],
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
