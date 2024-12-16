import { ForkKnife, Hamburger, Medal } from "@phosphor-icons/react";

import styles from "./About.module.css";
import imgOrange from "../images/orange.png";
import AboutFeature from "./AboutFeature";
import Button from "./Button";

const FEATURES = [
  {
    icon: <Medal color="#fb8a22" size={32} />,
    title: "More than 10 year",
    text: "We have great pleasure in introducing our concern being the leaders in fields of spicy food products. We have been serving the end users and consumer.",
  },
  {
    icon: <ForkKnife color="#fb8a22" size={32} />,
    title: "Cutting-Edge infrastructure",
    text: " Well equipped and had total infrastructure of most modren plant and machinery and automated while in the process of making the following.",
  },
  {
    icon: <Hamburger color="#fb8a22" size={32} />,
    title: "Discover our acclaimed products",
    text: "All these products are widely acclaimed due to its highlighting features like fresh & healthy, low calorie, adulteration free, longer shelf life.",
  },
];

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <img src={imgOrange} alt="Orange Splash" className={styles.orangeImg} />
      <div className={styles.about}>
        <h2 className={styles.heading_02}>About the company</h2>
        <ul className={styles.features}>
          {FEATURES.map((feature, i) => (
            <AboutFeature
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              key={i + 1}
            />
          ))}
        </ul>
        <Button>Read more</Button>
      </div>
    </section>
  );
}
