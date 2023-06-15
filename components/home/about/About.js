import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Ahmed, a web developer with a passion for creating elegant, intuitive, and user-friendly websites.
               I specialize in building responsive websites that work seamlessly across all devices,
                from desktops to mobile devices.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            What I love most about web development is the ability to bring ideas to life. 
            I enjoy taking a clients vision and transforming it into a fully-functional, beautifully designed 
            website that exceeds their expectations. Whether its creating a custom e-commerce solution,
             building a complex web application, or designing a simple landing page,
              I approach each project with the same level of enthusiasm and dedication.


            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            When Im not coding, you can find me exploring the latest web development trends and techniques, 
            attending industry conferences and events, and collaborating with other developers in the community.
             Im always looking for new challenges and opportunities to expand my skill set,
              and Im excited to see where my passion for web development will take me next.


            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            dont hesitate to get in touch if you have any questions or would like to discuss a potential project.
             Lets work together to create something amazing!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
