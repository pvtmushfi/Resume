import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-content">
        <div className="profile-image">
          <img src={profile} alt="Musharaf Ali" />
        </div>

        <div className="profile-info">
          <h1>Hi, I'm Musharaf Ali 👋</h1>

          <h2>
            Software Engineer | Full Stack Developer | Data Science Enthusiast
          </h2>

          <p>
            Aspiring Software Engineer and Data Science Enthusiast pursuing a
            B.Tech in Computer Science & Engineering. Skilled in Python, Java,
            Angular, React, FastAPI, MySQL, and Machine Learning technologies.
            Passionate about building scalable applications, solving real-world
            problems, and continuously learning emerging technologies.
          </p>

          <div className="buttons">
            <button onClick={() => navigate("/projects")}>
              View Projects
            </button>

            <button onClick={() => navigate("/contact")}>
              Contact Me
            </button>

            <a
              href="/Musharaf_Ali_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>

            <a
              href="/Musharaf_Ali_Resume.pdf"
              download
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
          <div className="footer-links">
            <a
              href="https://github.com/pvtmushfi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/musharaf-ali-7b5a712a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:aliofficial00018@gmail.com">
              Email
            </a>

          <p className="footer-text">
            Designed & Developed by ❤️ Musharaf Ali
          </p>

          <p className="copyright">
            © 2026 Musharaf Ali. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Home;