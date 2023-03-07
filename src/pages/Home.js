import React from "react";
import About from "../components/About";

const Home = () => {
  return (
    <>
      {/* <!-- Banner --> */}
      <main>
        <section className="home" id="home">
          <div className="home-center">
            <div className="home-title">
              <h1>Scroll Project</h1>
            </div>
            <div className="home-para">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti veniam ducimus laboriosam magnam saepe repellendus
                ipsam doloribus voluptatem!
              </p>
            </div>
            <div className="home-btn">
              <button>
                <a href="#">Explore more</a>
              </button>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <p></p>
        </section>
      </main>

      {/* <About /> */}
    </>
  );
};

export default Home;
