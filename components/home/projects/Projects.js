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
  // {
  //   title: "Paint.app",
  //   imgSrc: ".jpg",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["Flutter", "MUI", "Python", "FastAPI"],
  //   description:
  //     "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Pain.app is a real-time coaching app for students learning to paint.
  //         This app is my baby, designed and built on my own.
  //       </p>
  //       <p>
  //         The tech stack is based on top of Flutter for the mobile app,
  //         connected to a Python & FastAPI backend, with data stored in Postgres,
  //         deployed on Heroku.
  //       </p>
  //       <p>
  //         Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
  //         {":)"}
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "The Canvas Club",
  //   imgSrc: "project-imgs/example-project.jpg",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["Node", "Express", "Postgres", "Kafka", "Redis"],
  //   description:
  //     "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  //   modalContent: (
  //     <>
  //       <p>
  //         The Canvas Club is a social community for painters to connect with
  //         others in their community.
  //       </p>
  //       <p>
  //         I work primarily on the backend, a collection of Node & Express
  //         microservices. Data is stored primarily in Postgres & cached in Redis.
  //       </p>
  //       <p>
  //         The team in total consists of 5 developers. This is a passion project
  //         for all of us.
  //       </p>
  //       <p>
  //         Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
  //         {":)"}
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
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
