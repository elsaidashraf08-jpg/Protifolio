import { React, useState } from "react";
import styles from "./Pricing.module.css";
import CardPricing from "../Repeating/CardPricing/CardPricing";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Pricing() {
  let [contant, setContant] = useState([
    {
      title: "Basic",
      description: "Need a simple and clean website or landing page?",
      price: "$3",
      services: [
        "Responsive HTML, CSS, React setup",
        "Reusable UI components",
        "Smooth animations",
        "Basic SEO setup",
        "No backend or API integration",
      ],
    },
    {
      title: "Professional",
      description: "Need a dynamic, modern React website with integrations?",
      price: "$6",
      services: [
        " Full React project setup ",
        "API & backend integration",
        "State management (Redux/Context)",
        "Basic dashboard or admin panel",
        "Optimized performance",
      ],
    },
    // {
    //   title: "Professional",
    //   description: "or clients who want a full production-ready web app with high performance",
    //   price: "$10",
    //   services: [
    //     " Complete front-end architecture ",
    //     "Custom design implementation",
    //     "Deployment & CI/CD setup",
    //     " Ongoing support & maintenance" ,
    //     "Advanced animations",
    //   ],
    // },
  ]);
 AOS.init({
    duration: 1000,
    once: true,
  });
  return (
    <>
      <section className={`${styles.pricing}`}>
        <div className="container"  data-aos="fade-up">
          <div className={`${styles.Contentpricing} text-center mb-5 `}>
            <span className=""> Pricing</span>
            <h2 className="fs-1 fw-bold ">Flexible Front-End Plans</h2>
          </div>
          <div className="cards">
            <div className="row g-4 justify-content-center">
              {contant.map((item, index) => {
                return (
                  <CardPricing
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    services={item.services}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
