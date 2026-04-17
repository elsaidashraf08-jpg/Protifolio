import styles from "./Navdar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div
          className={`container ${styles.bg} px-lg-5 px-3 py-2 my-lg-2 ${styles.fixedNav}`}
        >
          <a className="navbar-brand" href="#"></a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false "
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 gap-3">
              <li className="nav-item pt-2">
                <a
                  className={`nav-link active ${styles.navLink}   `}
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link active ${styles.navLink}  pt-3  `}
                  aria-current="page"
                  href="#services"
                  onClick={() => {
                    window.scrollTo({ top: 850, behavior: "smooth" });
                  }}
                >
                  SERVICES
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link active ${styles.navLink}  pt-3  `}
                  aria-current="page"
                  href="#work"
                  onClick={() => {
                    window.scrollTo({ top: 1700, behavior: "smooth" });
                  }}
                >
                  WORK
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link active ${styles.navLink}  pt-3  `}
                  aria-current="page"
                  href="#resume"
                  onClick={() => {
                    window.scrollTo({ top: 4000, behavior: "smooth" });
                  }}
                >
                  RESUME
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link active ${styles.navLink}  pt-3  `}
                  aria-current="page"
                  href="#pricing"
                  onClick={() => {
                    window.scrollTo({ top: 5000, behavior: "smooth" });
                  }}
                >
                  PRICING
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link active ${styles.navLink}  pt-3  `}
                  aria-current="page"
                  href="#contact"
                  onClick={() => {
                    window.scrollTo({ top: 6000, behavior: "smooth" });
                  }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <button
              className={`d-flex gap-3 align-items-center bg-white rounded-5 px-4 py-2 border-0 ${styles.navhaver}`}
              type="submit"
              onClick={() => {
                window.scrollTo({ top: 6000, behavior: "smooth" });
              }}
            >
              <span className={` text-black ${styles.navbtn} `}>
                {" "}
                let's talk
              </span>

              <i className="fa-regular fa-comment text-black "></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
