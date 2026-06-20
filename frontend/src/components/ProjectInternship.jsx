import React from "react";
import hommiesImg from "../assets/hommies.png";
import kisanImg from "../assets/kisanmarket.png";

function ProjectInternship() {
  return (
    <section id="projects">
      <h1>Projects & Professional Experience</h1>

      {/* Hommies */}
      <div className="project-card">
        <img
          src={hommiesImg}
          alt="Hommies Project"
          className="project-image"
        />

        <h2>🏠 Hommies – Rental Accommodation Platform</h2>

        <p>
          Developed a web-based rental accommodation platform that helps
          users find suitable rooms, hostels, and rental properties based
          on their preferences and location.
        </p>

        <p>
          <strong>Technologies Used:</strong>
          Angular, FastAPI, Python, MySQL, HTML, CSS, JavaScript
        </p>
      </div>

      {/* Kisan Market */}
      <div className="project-card">
        <img
          src={kisanImg}
          alt="Kisan Market Project"
          className="project-image"
        />

        <h2>🌾 Kisan Market – Farm-to-Consumer Platform</h2>

        <p>
          Developed a full-stack web application that connects farmers
          directly with consumers and enables online product management.
        </p>

        <p>
          <strong>Technologies Used:</strong>
          React, FastAPI, Python, MySQL, HTML, CSS, JavaScript
        </p>
      </div>

      {/* Experience */}
      <div className="project-card">
        <h2>🚀 Industry Exposure & Professional Mentorship</h2>

        <p>
          Worked closely with an experienced IT professional to gain
          practical exposure to software development workflows and
          modern web technologies.
        </p>

        <ul>
          <li>Web Application Development Lifecycle</li>
          <li>REST API Design and Testing using Postman</li>
          <li>Database Management with MySQL</li>
          <li>Version Control using Git and GitHub</li>
          <li>Team Collaboration and Software Engineering Practices</li>
          <li>Debugging and Problem-Solving Techniques</li>
        </ul>
      </div>

      {/* GitHub Section */}
      <div className="github-section">
        <h2>💻 View More Projects</h2>

        <p>
          Explore my repositories, coding projects, and contributions on GitHub.
        </p>

        <a
          href="https://github.com/pvtmushfi"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          Visit My GitHub
        </a>
      </div>
    </section>
  );
}

export default ProjectInternship;