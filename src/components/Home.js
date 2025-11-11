import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

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
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaPhoneAlt />
            </li>
            <li>
              <MdEmail />
            </li>
          </ul>
        </div>

        <div className="home-right">
          <div className="portrait-blob" aria-hidden>
            <img alt="portrait" src="\images\Passport KMR.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
