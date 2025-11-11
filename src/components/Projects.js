import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="projects-inner">
        <div className="projects-left">
          <h2>Projects</h2>
          <div className="project-con">
            <div className="con">
              <h3>TASTY KITCHEN</h3>
              <p>
                Tasty Kitchens is a web app built with React.js for browsing and
                ordering from various cuisines. It features user authentication,
                restaurant search, and a smooth checkout process, all powered by
                a React.js front.
              </p>
            </div>
            <div className="con">
              <h3>NXTTRENDZ</h3>
              <p>
                NxtTrendz is an e-commerce web application built with React.js.
                It allows users to browse and purchase trendy products with
                features like user authentication, product search, and a
                streamlined checkout process, all delivered through a responsive
                and user-friendly React.js interface.
              </p>
            </div>
            <div className="con">
              <h3>NXTWATCH</h3>
              <p>
                NxtWatch is a YouTube-like web application developed using
                React.js. It allows users to explore, watch, and search for
                videos. The application features user authentication, video
                recommendations, and a responsive design for an engaging viewing
                experience.
              </p>
            </div>
            <div className="con">
              <h3>JOBBY APPLICATION</h3>
              <p>
                Jobby is a job search application built with React.js. It
                enables users to browse job listings, apply for positions, and
                manage applications. Key features include user profiles,
                advanced search filters, and a responsive interface for a
                seamless job-hunting experience.
              </p>
            </div>
          </div>
        </div>
        {/*
        <div className="about-right">
          <div className="big-blob" />
          <div className="small-blob" />
        </div>
        */}
      </div>
    </section>
  );
}
