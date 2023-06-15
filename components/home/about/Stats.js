import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">Angular</span>
            {/* <span className="chip">NodeJS</span>
            <span className="chip">Express</span> */}
            <span className="chip">Bootstrap</span>
            <span className="chip">Tailwind</span>
            <span className="chip">MongoDB</span>
            <span className="chip">AWS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Tools</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Ajax</span>
            <span className="chip">Git</span>
            <span className="chip">Gulp</span>
            <span className="chip">Webpack</span>
            <span className="chip">npm</span>
            <span className="chip">Command Line</span>
            <span className="chip">Vs code</span>
            {/* <span className="chip">Trello</span>
            <span className="chip">Slack</span> */}
            <span className="chip">Figma</span>
            <span className="chip">Photoshop</span>
            <span className="chip">Adobe XD</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
