 
import styles from "./Expertise.module.css";
import ExpertiseItem from "../ExpertiseItem/ExpertiseItem";
import icon1 from "../../assets/Image/figma.png";
import icon2 from "../../assets/Image/html.webp";
import icon3 from "../../assets/Image/CSS3_logo.svg.png";
import icon4 from "../../assets/Image/js.webp";
import icon5 from "../../assets/Image/bootstrap.webp";
import icon6 from "../../assets/Image/github.webp";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Expertise() {
  const expertise = [
    {
      name:"Figma",
      percentage: 75,
      icon: icon1
    },
    {
      name:"HTML",
      percentage: 60,
      icon: icon2
    },
    {
      name:"CSS",
      percentage: 70,
      icon: icon3
    },
    {
      name:"JavaScript",
      percentage: 80,
      icon: icon4
    },
    {
      name:"Bootstrap",
      percentage: 90,
      icon: icon5
    },
    {
      name:"GitHub",
      percentage: 70,
      icon: icon6
    },
  ];

 AOS.init({
    duration: 1000,
    once: true,
  });
  return (
    <>
      <section className={styles.expertise}>
        <div className="container"  data-aos="fade-up">
          <div className={`${styles.text_center} text-center mb-5 `}>
            <span className=""> Top Skills</span>
            <h2 className="fs-1">See my expertise</h2>
          </div>
          <div className="cards">
            <div className={`row`}>
              {expertise.map((item,index) => <ExpertiseItem key={index} icon={item.icon} ratio={item.percentage} name={item.name} />)}
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
