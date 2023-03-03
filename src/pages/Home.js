import React from "react";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          {/* <!-- Item --> */}
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h6>we are ready to help you</h6>
                <h4>
                  Financial Analysis
                  <br />
                  &amp; Consulting
                </h4>
                <p>
                  This finance HTML template is 100% free of charge provided by
                  TemplateMo for everyone. This is a multiple-page version with
                  different HTML pages.{" "}
                  <a href="one-page.html">One-page version</a> is available as
                  of 2021 February.
                </p>
                <a href="contact.html" className="filled-button">
                  contact us
                </a>
              </div>
            </div>
          </div>
          {/* <!-- // Item --> */}
          {/* <!-- Item --> */}
          <div className="item item-2">
            <div className="img-fill">
              <div className="text-content">
                <h6>we are here to support you</h6>
                <h4>
                  Accounting
                  <br />
                  &amp; Management
                </h4>
                <p>
                  You are allowed to use this template for your company
                  websites. You are NOT allowed to re-distribute this template
                  ZIP file on any template download website. Please contact
                  TemplateMo for more detail.
                </p>
                <a href="services.html" className="filled-button">
                  our services
                </a>
              </div>
            </div>
          </div>
          {/* <!-- // Item --> */}
          {/* <!-- Item --> */}
          <div className="item item-3">
            <div className="img-fill">
              <div className="text-content">
                <h6>we have a solid background</h6>
                <h4>
                  Market Analysis
                  <br />
                  &amp; Statistics
                </h4>
                <p>
                  You can download, edit and use this layout for your business
                  website. Phasellus lacinia ac sapien vitae dapibus. Mauris ut
                  dapibus velit cras interdum nisl ac urna tempor mollis.
                </p>
                <a href="about.html" className="filled-button">
                  learn more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- // Item --> */}
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
