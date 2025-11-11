import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="skills-inner">
        <div className="skills-left">
          <h2>Skills</h2>
          <div className="skill-con">
            <ul>
              <p>Front-End</p>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
            </ul>
            <ul>
              <p>Back-End</p>
              <li>Python</li>
              <li>NodeJS</li>
              <li>Express</li>
            </ul>
            <ul>
              <p>Databases</p>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li>DSA</li>
              <li>Rest API</li>
              <li>OOPs</li>
            </ul>
            <ul>
              <p>Others</p>
              <li>Collaboration</li>
              <li>Time Management</li>
              <li>Adaptability</li>
              <li>Problem-Solving</li>
            </ul>
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
