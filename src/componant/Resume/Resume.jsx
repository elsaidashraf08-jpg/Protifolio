import styles from "./Resume.module.css";
import CardResume from "../Repeating/CardResume/CardResume";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Resume() {
  const expertise = [
    {
      index: 0,
      title: "Frontend Developer",
      data: "5 - 2025 ",
      discription:
        "I am a passionate lead developer with over 5 years of experience in building scalable web applications. I have a strong background in JavaScript, React, and Node.js.",
    },
    {
      index: 0,
      title: "Frontend Developer",
      data: "5 - 2025 ",
      discription:
        "I am a passionate lead developer with over 5 years of experience in building scalable web applications. I have a strong background in JavaScript, React, and Node.js.",
    }


  ];
  const education = [


    {
      index: 1,
      title: " communication Engineer",
      data: "2023 - 2028  Present",
      discription:
        "Communication Engineering student with knowledge of analog and digital communication systems, signal processing, and microwave devices. Motivated to develop technical skills and apply engineering concepts to real-world communication challenges.",
    },

    {
      index: 1,
      title: " communication Engineer",
      data: "2023 - 2028   Present",
      discription:
        "Communication Engineering student with knowledge of analog and digital communication systems, signal processing, and microwave devices. Motivated to develop technical skills and apply engineering concepts to real-world communication challenges.",
    }
  ];
 AOS.init({
    duration: 1000,
    once: true,
  });
  return (
    <>
      <section className={`${styles.resume} `}>
        <div className="container" data-aos="fade-up">
          <div className="cards ">
            <div className="row justify-content-around gy-3">
              <div className="col-lg-6 gap-4 d-flex flex-column ">
                <h2 className="text-white fs-2 fw-bold">My Expertise </h2>
                {expertise.map((item) => (
                  <CardResume
                    key={item.index}
                    title={item.title}
                    data={item.data}
                    discription={item.discription}
                  />
                ))}
              </div>
              <div className="col-lg-6  gap-4 d-flex flex-column">
                <h2 className="text-white fs-2 fw-bold  ">
                  Education Background
                </h2>
                {education.map((item) => (
                  <CardResume
                    key={item.index}
                    title={item.title}
                    data={item.data}
                    discription={item.discription}
                  />
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
