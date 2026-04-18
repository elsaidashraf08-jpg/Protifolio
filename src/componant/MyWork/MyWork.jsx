import styles from "./MyWork.module.css";
import CardWork from "../Repeating/CardWork/CardWork";
import img1 from "../../assets/Image/restaurant.png";
import img2 from "../../assets/Image/wed2.png";
import img3 from "../../assets/Image/web3.png";
import img4 from "../../assets/Image/web4.png";
export default function MyWork() {
  const data = [
    {
      title: "Game Zone",
      image: img2,
      comment: ["Web", "Design"],
      link: "https://game-zone-ten-indol.vercel.app/",
    },
    {
      title: " Movie Search",
      image: img3,
      comment: ["Web", "Design", "js", "api"],

      link: "https://moviesearch-steel-zeta.vercel.app/",
    },
    {
      title: " Restaurant Website",
      image: img1,
      comment: ["Web3", "Design"],
      link: "https://restaurant-blush-eight-91.vercel.app/",
    },
    {
      title: "  Add and Update Product",
      image: img4,
      comment: ["Web", "Design" , "js"],
      link: "https://add-and-update-prodact.vercel.app/",
    },
  ];

  return (
    <>
      <section className={styles.myWork}>
        <div className="container">
          <div className={`${styles.text_center} text-center mb-5 `}>
            <span className=""> Portfolio</span>
            <h2 className="fs-1">My Work</h2>
          </div>
          <div className="cards">
            <div className="row">
              {data.map((item, index) => {
                return (
                  <CardWork
                    key={index}
                    title={item.title}
                    image={item.image}
                    comment={item.comment}
                    link={item.link}
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
