function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h1>Contact Me</h1>

        <p className="contact-subtitle">
          Feel free to reach out for opportunities, collaborations,
          projects, or just a friendly conversation.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <a href="tel:+916205758639">
              +91 6205758639
            </a>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <a href="mailto:aliofficial00018@gmail.com">
              aliofficial00018@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>📍 Location</h3>
            <p>Bhopal, India</p>
          </div>

          <div className="contact-card">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/musharaf-ali-7b5a712a0/"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn Profile
            </a>
          </div>

          <div className="contact-card">
            <h3>💻 GitHub</h3>
            <a
              href="https://github.com/pvtmushfi"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub Profile
            </a>
          </div>

        </div>

        <div className="contact-footer">
          <h2>Let's Build Something Amazing Together 🚀</h2>
          <p>
            Open to internships, freelance projects,
            software development opportunities, and collaborations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;