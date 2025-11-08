import React from "react";

export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-inner">
        <div className="home-left">
          <span className="hello-pill">Hello!</span>
          <h1 className="headline">
            I’m <strong>Raj</strong>{" "}
            <span role="img" aria-label="waving">
              👋
            </span>
          </h1>
          <p className="sub">
            UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </p>

          <div className="cta-row">
            <a className="btn btn-primary" href="#download">
              Download CV
            </a>
            <a className="btn btn-outline" href="#contact">
              Get in Touch
            </a>
          </div>

          <ul className="social-left" aria-hidden>
            <li>●</li>
            <li>●</li>
            <li>●</li>
            <li>●</li>
            <li>●</li>
          </ul>
        </div>

        <div className="home-right">
          <div className="portrait-blob" aria-hidden>
            <img alt="portrait" src="/portrait-placeholder.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
