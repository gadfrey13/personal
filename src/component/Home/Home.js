import React from "react";
import profilepic from "../../resource/img/profile.png";
import "./Home.css";
import technology from "../../resource/img/technology.jpg";
const Home = props => {
  return (
    <div>
      <header className="headers masthead text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mb-0 waves-effect waves-light">
            Full Stack Developer
          </h1>
          <p className="masthead-subheading font-weight-light mb-0">
            Hi, my name is Gadfrey Balacy I'm a full stack developer with
            a degree of Bachelors of Computer Science.
          </p>
          <img
            className="masthead-avatar mb-2 mt-3"
            src={profilepic}
            width="200px"
            alt=""
          />

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
        </div>
      </header>

      <section className="page-section portfolio" id="portfolio">
        <div className="container pb-5">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-2 pt-2"></h2>

          <div className="divider-custom mt-5">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-md-8 col-lg-8">
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={technology} alt="picture" />
              </div>
            </div>

            <div className="col-md-4 col-lg-4">
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <div>
                    <p className="text-gray waves-effect waves-light">
                    Building applications that are reliable, fast, and responsive. That will
                    work in multiple devices. From the the desktop to your mobile phone.     
                    </p>
                  <button>Projects</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
